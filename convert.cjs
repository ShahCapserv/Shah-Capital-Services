const fs = require('fs');
const content = fs.readFileSync('d:/shah-capital-services/Commission Disclosure - Equity.csv', 'utf-8');
const lines = content.split('\n');
const headers = lines[0].trim().split(',').map(h => h.trim());
const data = [];
for (let i = 1; i < lines.length; i++) {
  if (!lines[i].trim()) continue;
  
  const row = [];
  let inQuotes = false;
  let currentVal = '';
  for(let char of lines[i]) {
    if(char === '"') inQuotes = !inQuotes;
    else if(char === ',' && !inQuotes) {
      row.push(currentVal.trim());
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  row.push(currentVal.trim());

  const obj = {};
  headers.forEach((h, index) => {
    obj[h] = row[index] || '';
  });
  data.push(obj);
}
// ensure dir exists
if (!fs.existsSync('d:/shah-capital-services/src/constants')) {
  fs.mkdirSync('d:/shah-capital-services/src/constants', { recursive: true });
}
fs.writeFileSync('d:/shah-capital-services/src/constants/equity-commissions.json', JSON.stringify(data, null, 2));
