import React, { useState } from 'react'
import Banner from '#/features/banner/Banner'
import { ReachUsModal } from '#/components/ReachUsForm'
import { CorporateDepositsTable } from './CorporateDepositsTable'

export const DepositsAndBondsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('corporate')

  return (
    <div className="page-wrapper">
      <Banner
        title="Deposits & Bonds"
        subTitle="Services"
        subTitleLink="/services"
        thirdTitle="Deposits & Bonds"
      />


      <section className="mf-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-10 text-center">
              <h2 className="mf-section-title">Stability & Predictability</h2>
              <p className="mf-intro-text">
                Fixed income instruments continue to play an important role in portfolio construction for investors seeking stability, predictable income, capital preservation, and diversification from market-linked investments.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <ul className="nav nav-pills nav-fill mb-5 shadow-sm rounded-4 p-2 bg-light" id="fd-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === 'corporate' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('corporate')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    Corporate Deposits
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === 'fmps' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('fmps')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    Fixed Maturity Plans
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === '54ec' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('54ec')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    54EC Bonds
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link rounded-pill ${activeTab === 'debentures' ? 'active bg-theme-base text-white fw-bold' : 'text-dark fw-medium'}`}
                    onClick={() => setActiveTab('debentures')}
                    type="button"
                    style={{ padding: '12px 20px', transition: 'all 0.3s ease' }}
                  >
                    Debentures
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content" id="fd-tabContent">
            {activeTab === 'corporate' && (
              <div className="tab-pane fade show active p-4 bg-white rounded-4 shadow-sm border">
                <h3 className="services-three__title fs-4 mb-4">Corporate Deposits</h3>
                <p className="mb-4 text-muted">
                  Corporate Deposits are loan arrangements where a specific amount of funds is placed on deposit under the name of the account holder. The money placed on deposit earns a fixed rate of interest, according to the terms and conditions that govern the account. The actual amount of the fixed rate can be influenced by such factors as the type of currency involved in the deposit, the duration set in place for the deposit, and the location where the deposit is made.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Benefits of Investing in Company Deposits</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> High interest.</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Short-term deposits.</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Lock-in period is only 6 months.</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> No Income Tax is deducted at source if the interest income is up to Rs 5,000 in one financial year.</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Investment can be spread in more than one company, so that interest from one company does not exceed Rs. 5,000.</li>
                    </ul>
                  </div>
                </div>

                <h5 className="fw-bold mb-3">Our Recommended List for Fixed Income Instruments</h5>
                <p className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
                  Interest rates (% p.a.) as on {(() => {
                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    const d = new Date();
                    return `${String(d.getDate()).padStart(2, '0')}-${months[d.getMonth()]}-${d.getFullYear()}`;
                  })()}. Subject to change without notice.
                </p>
                <CorporateDepositsTable />
              </div>
            )}

            {activeTab === 'fmps' && (
              <div className="tab-pane fade show active p-4 bg-white rounded-4 shadow-sm border">
                <h3 className="services-three__title fs-4 mb-4">Fixed Maturity Plans (FMPs)</h3>
                <p className="mb-4 text-muted">
                  These are closed ended debt schemes with a fixed maturity date and they invest in debt &amp; money market instruments maturing on or before the date of the maturity of the scheme.
                </p>
                <div className="row g-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Why FMP?</h5>
                    <p className="text-muted mb-3">
                      FMPs are the equivalent of a fixed deposit in a bank, with a little difference. The FMP's returns are only indicated and not 'guaranteed'. Since the fund house knows the interest rate that it will earn on its investments, it can provide 'indicative returns' to investors. FMPs are debt schemes, where the corpus is invested in fixed-income securities.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Where do FMPs Invest?</h5>
                    <p className="text-muted mb-3">
                      FMPs usually invest in certificate of deposits (CDs), commercial papers (CPs), money market instruments, corporate bonds and sometimes even in bank fixed deposits. Depending on the tenure of the FMP, the fund manager invests in a combination of the above-mentioned instruments of similar maturity. Say if the FMP is for a year, then the fund manager invests in paper maturing in one year.
                    </p>
                  </div>
                  <div className="col-12">
                    <h5 className="fw-bold mb-2">Tenure of FMPs</h5>
                    <p className="text-muted mb-0">
                      The tenure can be of different maturities, from one month to three years. They are closed-ended in nature, which means that once the NFO (new fund offer) closes, the scheme cannot accept any further investment.
                    </p>
                  </div>
                  <div className="col-12 mt-3">
                    <p className="text-muted mb-3">
                      These FMP NFOs are generally open for 2 to 3 days and are marketed to corporates and well-heeled, high net-worth individuals. Nevertheless, the minimum investment is usually Rs 5,000 and so a retail investor can comfortably invest too.
                    </p>
                    <p className="text-muted fw-bold mb-0">
                      FMP's are investment options for sure if you want to park your money for short term. They are more tax efficient and give better post-tax returns. Though returns are not 100% guaranteed, they are almost risk free (remember almost).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === '54ec' && (
              <div className="tab-pane fade show active p-4 bg-white rounded-4 shadow-sm border">
                <h3 className="services-three__title fs-4 mb-4">54EC Bonds</h3>
                <p className="mb-3 text-muted">
                  These bonds are exempt from income tax and have attractive interest rates. Since companies have better credit ratings they have better safety on returns. The option of holding bonds in "Demat Form" makes your investment easy to handle and monitor.
                </p>
                <p className="mb-4 text-muted">
                  Capital Gain can be saved Under Sec 54EC or Sec 54F, if the land or property sold is non-agricultural. We deal in such bonds which qualify for Sec 54EC Bonds.
                </p>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-2">Tax Saving Options</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Tax can be saved under Section 54EC by investing in bonds.</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-theme-base me-2"></i> Tax can be saved under Section 54F by investment in a new residential house.</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-3">Bond Details</h5>
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm text-center">
                        <thead className="table-light">
                          <tr>
                            <th>Bond</th>
                            <th>Interest Rate</th>
                            <th>Frequency</th>
                            <th>Term</th>
                            <th>Min Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>REC-54EC</td>
                            <td>5%</td>
                            <td>Annually</td>
                            <td>5 Yrs</td>
                            <td>20,000</td>
                          </tr>
                          <tr>
                            <td>NHAI-54EC</td>
                            <td>5%</td>
                            <td>Annually</td>
                            <td>5 Yrs</td>
                            <td>10,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <h5 className="fw-bold mb-3">Conditions to Claim Section 54EC</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Long Term Capital Asset means any capital asset held by the assessee for more than 5 years.</li>
                  <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> If the assessee has sold the long-term capital asset during the previous year and made a long-term capital gain, they can invest the gain in capital gain bonds and save tax on long-term capital gain.</li>
                  <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Applicable to all types of assessees — individuals, firms, companies, etc.</li>
                  <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Amount to be invested in bonds is only the capital gain, not the net consideration received on sale of long-term capital asset.</li>
                  <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Amount exempted is the lower of capital gain or amount invested in capital gain bonds, up to a maximum of ₹50 Lakhs.</li>
                  <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> These bonds have a maturity period of 5 years.</li>
                  <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Capital gain bonds eligible under this section can now only be issued by REC or NABARD.</li>
                  <li className="mb-2"><i className="fa-solid fa-circle-dot text-theme-base me-2"></i> Bonds cannot be pledged, sold, or transferred before completion of 5 years from purchase. If transferred, the capital gain exemption will be made taxable in that year as long-term capital gain.</li>
                </ul>
                <p className="text-muted mt-4 mb-3">
                  Amount of capital gain should be invested in Capital gain bond within 6 months from date of transfer/sale of capital asset.
                </p>
                <p className="text-muted mb-0">
                  One more good news for you — the ₹50 lakh limit is for each financial year. As your six month limit may fall in two different financial years, you can save ₹50 lakh in one FY and ₹50 lakh in the next FY. So one can save up to a maximum of <strong>₹1 crore of capital gain u/s 54EC</strong>.
                </p>
              </div>
            )}

            {activeTab === 'debentures' && (
              <div className="tab-pane fade show active p-4 bg-white rounded-4 shadow-sm border">
                <h3 className="services-three__title fs-4 mb-4">Debentures</h3>
                <p className="mb-3 text-muted">
                  A type of debt instrument that is not secured by physical asset or collateral. Debentures are backed only by the general creditworthiness and reputation of the issuer. Both corporations and governments frequently issue this type of bond in order to secure capital. Like other types of bonds, debentures are documented in an indenture.
                </p>
                <p className="mb-3 text-muted">
                  Debentures have no collateral. Bond buyers generally purchase debentures based on the belief that the bond issuer is unlikely to default on the repayment. An example of a government debenture would be any government-issued Treasury bond (T-bond) or Treasury bill (T-bill). T-bonds and T-bills are generally considered risk free because governments, at worst, can print off more money or raise taxes to pay these type of debts.
                </p>
                <p className="mb-3 text-muted">
                  A debenture is a document that either creates a debt or acknowledges it, and it is a debt without collateral. In corporate finance, the term is used for a medium- to long-term debt instrument used by large companies to borrow money. In some countries the term is used interchangeably with bond, loan stock or note.
                </p>
                <p className="mb-3 text-muted">
                  A debenture is thus like a certificate of loan or a loan bond evidencing the fact that the company is liable to pay a specified amount with interest and although the money raised by the debentures becomes a part of the company's capital structure, it does not become share capital. Senior debentures get paid before subordinate debentures, and there are varying rates of risk and payoff for these categories.
                </p>

                <h5 className="fw-bold mt-4 mb-3">There are two types of debentures:</h5>
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <strong>Convertible debentures</strong>, which are convertible bonds or bonds that can be converted into equity shares of the issuing company after a predetermined period of time. "Convertibility" is a feature that corporations may add to the bonds they issue to make them more attractive to buyers. In other words, it is a special feature that a corporate bond may carry. As a result of the advantage a buyer gets from the ability to convert, convertible bonds typically have lower interest rates than non-convertible corporate bonds.
                  </li>
                  <li className="mb-0">
                    <strong>Non-convertible debentures</strong>, which are simply regular debentures, cannot be converted into equity shares of the liable company. They are debentures without the convertibility feature attached to them. As a result, they usually carry higher interest rates than their convertible counterparts.
                  </li>
                </ul>
              </div>
            )}
          </div>
          

        </div>
      </section>

      <div className="text-center my-5 d-flex flex-wrap gap-4 justify-content-center">
        <button
          type="button"
          className="thm-btn"
          data-bs-toggle="modal"
          data-bs-target="#reachUsModal"
        >
          Contact Us
        </button>
        <a
          href="https://zfrmz.in/k39OigbpztM0gK6Dqwxm"
          target="_blank"
          rel="noopener noreferrer"
          className="thm-btn btn-glow-effect"
        >
          Onboard Now
        </a>
      </div>

      <ReachUsModal defaultService="Fixed Deposit" />
    </div>
  )
}

