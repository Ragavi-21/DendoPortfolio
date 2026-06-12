import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "+91",
          phone: "",
          subject: "General Inquiry",
          message: ""
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className="contact-page">
      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <h1 className="contact-title">Get in Touch with DENDO</h1>
        <p className="contact-subtitle">
          Have questions, ideas, partnerships, or business inquiries? <br />
          Our team is ready to help you experience the peak of hyperlocal luxury dining.
        </p>
        <div className="response-badge">
          <span className="badge-icon"><svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21V19H16V18H12V10H16V9C16 7.06667 15.3167 5.41667 13.95 4.05C12.5833 2.68333 10.9333 2 9 2C7.06667 2 5.41667 2.68333 4.05 4.05C2.68333 5.41667 2 7.06667 2 9V10H6V18H2C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V9C0 7.76667 0.2375 6.60417 0.7125 5.5125C1.1875 4.42083 1.83333 3.46667 2.65 2.65C3.46667 1.83333 4.42083 1.1875 5.5125 0.7125C6.60417 0.2375 7.76667 0 9 0C10.2333 0 11.3958 0.2375 12.4875 0.7125C13.5792 1.1875 14.5333 1.83333 15.35 2.65C16.1667 3.46667 16.8125 4.42083 17.2875 5.5125C17.7625 6.60417 18 7.76667 18 9V19C18 19.55 17.8042 20.0208 17.4125 20.4125C17.0208 20.8042 16.55 21 16 21H9ZM2 16H4V12H2V16ZM14 16H16V12H14V16ZM2 12H4H2ZM14 12H16H14Z" fill="#100845"/>
</svg>
</span>
          <div className="badge-text">
            <span className="badge-label">AVERAGE RESPONSE</span>
            <span className="badge-value">Under 15 Minutes</span>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="contact-main">
        <div className="contact-container">
          
          {/* LEFT: FORM CARD */}
          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              {status.success && <div className="success-message">Thank you! Your message has been sent.</div>}
              {status.error && <div className="error-message">{status.error}</div>}
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="@gmail.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
  <label>Phone Number</label>

  <div className="phone-input-wrapper">
    
    {/* Country Code */}
                    <select 
                      className="country-code-select"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
  <option value="+93">🇦🇫 Afghanistan (+93)</option>
  <option value="+355">🇦🇱 Albania (+355)</option>
  <option value="+213">🇩🇿 Algeria (+213)</option>
  <option value="+376">🇦🇩 Andorra (+376)</option>
  <option value="+244">🇦🇴 Angola (+244)</option>
  <option value="+54">🇦🇷 Argentina (+54)</option>
  <option value="+374">🇦🇲 Armenia (+374)</option>
  <option value="+61">🇦🇺 Australia (+61)</option>
  <option value="+43">🇦🇹 Austria (+43)</option>
  <option value="+994">🇦🇿 Azerbaijan (+994)</option>
  <option value="+973">🇧🇭 Bahrain (+973)</option>
  <option value="+880">🇧🇩 Bangladesh (+880)</option>
  <option value="+375">🇧🇾 Belarus (+375)</option>
  <option value="+32">🇧🇪 Belgium (+32)</option>
  <option value="+501">🇧🇿 Belize (+501)</option>
  <option value="+229">🇧🇯 Benin (+229)</option>
  <option value="+975">🇧🇹 Bhutan (+975)</option>
  <option value="+591">🇧🇴 Bolivia (+591)</option>
  <option value="+387">🇧🇦 Bosnia (+387)</option>
  <option value="+267">🇧🇼 Botswana (+267)</option>
  <option value="+55">🇧🇷 Brazil (+55)</option>
  <option value="+673">🇧🇳 Brunei (+673)</option>
  <option value="+359">🇧🇬 Bulgaria (+359)</option>
  <option value="+226">🇧🇫 Burkina Faso (+226)</option>
  <option value="+257">🇧🇮 Burundi (+257)</option>
  <option value="+855">🇰🇭 Cambodia (+855)</option>
  <option value="+237">🇨🇲 Cameroon (+237)</option>
  <option value="+1">🇨🇦 Canada (+1)</option>
  <option value="+238">🇨🇻 Cape Verde (+238)</option>
  <option value="+236">🇨🇫 Central African Republic (+236)</option>
  <option value="+235">🇹🇩 Chad (+235)</option>
  <option value="+56">🇨🇱 Chile (+56)</option>
  <option value="+86">🇨🇳 China (+86)</option>
  <option value="+57">🇨🇴 Colombia (+57)</option>
  <option value="+269">🇰🇲 Comoros (+269)</option>
  <option value="+242">🇨🇬 Congo (+242)</option>
  <option value="+506">🇨🇷 Costa Rica (+506)</option>
  <option value="+385">🇭🇷 Croatia (+385)</option>
  <option value="+53">🇨🇺 Cuba (+53)</option>
  <option value="+357">🇨🇾 Cyprus (+357)</option>
  <option value="+420">🇨🇿 Czech Republic (+420)</option>
  <option value="+45">🇩🇰 Denmark (+45)</option>
  <option value="+253">🇩🇯 Djibouti (+253)</option>
  <option value="+1">🇩🇴 Dominican Republic (+1)</option>
  <option value="+593">🇪🇨 Ecuador (+593)</option>
  <option value="+20">🇪🇬 Egypt (+20)</option>
  <option value="+503">🇸🇻 El Salvador (+503)</option>
  <option value="+240">🇬🇶 Equatorial Guinea (+240)</option>
  <option value="+291">🇪🇷 Eritrea (+291)</option>
  <option value="+372">🇪🇪 Estonia (+372)</option>
  <option value="+251">🇪🇹 Ethiopia (+251)</option>
  <option value="+679">🇫🇯 Fiji (+679)</option>
  <option value="+358">🇫🇮 Finland (+358)</option>
  <option value="+33">🇫🇷 France (+33)</option>
  <option value="+241">🇬🇦 Gabon (+241)</option>
  <option value="+220">🇬🇲 Gambia (+220)</option>
  <option value="+995">🇬🇪 Georgia (+995)</option>
  <option value="+49">🇩🇪 Germany (+49)</option>
  <option value="+233">🇬🇭 Ghana (+233)</option>
  <option value="+30">🇬🇷 Greece (+30)</option>
  <option value="+502">🇬🇹 Guatemala (+502)</option>
  <option value="+224">🇬🇳 Guinea (+224)</option>
  <option value="+592">🇬🇾 Guyana (+592)</option>
  <option value="+509">🇭🇹 Haiti (+509)</option>
  <option value="+504">🇭🇳 Honduras (+504)</option>
  <option value="+852">🇭🇰 Hong Kong (+852)</option>
  <option value="+36">🇭🇺 Hungary (+36)</option>
  <option value="+354">🇮🇸 Iceland (+354)</option>
  <option value="+91" selected>🇮🇳 India (+91)</option>
  <option value="+62">🇮🇩 Indonesia (+62)</option>
  <option value="+98">🇮🇷 Iran (+98)</option>
  <option value="+964">🇮🇶 Iraq (+964)</option>
  <option value="+353">🇮🇪 Ireland (+353)</option>
  <option value="+972">🇮🇱 Israel (+972)</option>
  <option value="+39">🇮🇹 Italy (+39)</option>
  <option value="+81">🇯🇵 Japan (+81)</option>
  <option value="+962">🇯🇴 Jordan (+962)</option>
  <option value="+7">🇰🇿 Kazakhstan (+7)</option>
  <option value="+254">🇰🇪 Kenya (+254)</option>
  <option value="+965">🇰🇼 Kuwait (+965)</option>
  <option value="+996">🇰🇬 Kyrgyzstan (+996)</option>
  <option value="+856">🇱🇦 Laos (+856)</option>
  <option value="+371">🇱🇻 Latvia (+371)</option>
  <option value="+961">🇱🇧 Lebanon (+961)</option>
  <option value="+266">🇱🇸 Lesotho (+266)</option>
  <option value="+231">🇱🇷 Liberia (+231)</option>
  <option value="+218">🇱🇾 Libya (+218)</option>
  <option value="+423">🇱🇮 Liechtenstein (+423)</option>
  <option value="+370">🇱🇹 Lithuania (+370)</option>
  <option value="+352">🇱🇺 Luxembourg (+352)</option>
  <option value="+60">🇲🇾 Malaysia (+60)</option>
  <option value="+960">🇲🇻 Maldives (+960)</option>
  <option value="+223">🇲🇱 Mali (+223)</option>
  <option value="+356">🇲🇹 Malta (+356)</option>
  <option value="+52">🇲🇽 Mexico (+52)</option>
  <option value="+976">🇲🇳 Mongolia (+976)</option>
  <option value="+212">🇲🇦 Morocco (+212)</option>
  <option value="+95">🇲🇲 Myanmar (+95)</option>
  <option value="+977">🇳🇵 Nepal (+977)</option>
  <option value="+31">🇳🇱 Netherlands (+31)</option>
  <option value="+64">🇳🇿 New Zealand (+64)</option>
  <option value="+234">🇳🇬 Nigeria (+234)</option>
  <option value="+850">🇰🇵 North Korea (+850)</option>
  <option value="+47">🇳🇴 Norway (+47)</option>
  <option value="+968">🇴🇲 Oman (+968)</option>
  <option value="+92">🇵🇰 Pakistan (+92)</option>
  <option value="+970">🇵🇸 Palestine (+970)</option>
  <option value="+507">🇵🇦 Panama (+507)</option>
  <option value="+675">🇵🇬 Papua New Guinea (+675)</option>
  <option value="+595">🇵🇾 Paraguay (+595)</option>
  <option value="+51">🇵🇪 Peru (+51)</option>
  <option value="+63">🇵🇭 Philippines (+63)</option>
  <option value="+48">🇵🇱 Poland (+48)</option>
  <option value="+351">🇵🇹 Portugal (+351)</option>
  <option value="+974">🇶🇦 Qatar (+974)</option>
  <option value="+40">🇷🇴 Romania (+40)</option>
  <option value="+7">🇷🇺 Russia (+7)</option>
  <option value="+250">🇷🇼 Rwanda (+250)</option>
  <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
  <option value="+221">🇸🇳 Senegal (+221)</option>
  <option value="+381">🇷🇸 Serbia (+381)</option>
  <option value="+65">🇸🇬 Singapore (+65)</option>
  <option value="+421">🇸🇰 Slovakia (+421)</option>
  <option value="+386">🇸🇮 Slovenia (+386)</option>
  <option value="+27">🇿🇦 South Africa (+27)</option>
  <option value="+82">🇰🇷 South Korea (+82)</option>
  <option value="+34">🇪🇸 Spain (+34)</option>
  <option value="+94">🇱🇰 Sri Lanka (+94)</option>
  <option value="+249">🇸🇩 Sudan (+249)</option>
  <option value="+46">🇸🇪 Sweden (+46)</option>
  <option value="+41">🇨🇭 Switzerland (+41)</option>
  <option value="+963">🇸🇾 Syria (+963)</option>
  <option value="+886">🇹🇼 Taiwan (+886)</option>
  <option value="+992">🇹🇯 Tajikistan (+992)</option>
  <option value="+255">🇹🇿 Tanzania (+255)</option>
  <option value="+66">🇹🇭 Thailand (+66)</option>
  <option value="+216">🇹🇳 Tunisia (+216)</option>
  <option value="+90">🇹🇷 Turkey (+90)</option>
  <option value="+993">🇹🇲 Turkmenistan (+993)</option>
  <option value="+256">🇺🇬 Uganda (+256)</option>
  <option value="+380">🇺🇦 Ukraine (+380)</option>
  <option value="+971">🇦🇪 UAE (+971)</option>
  <option value="+44">🇬🇧 United Kingdom (+44)</option>
  <option value="+1">🇺🇸 United States (+1)</option>
  <option value="+598">🇺🇾 Uruguay (+598)</option>
  <option value="+998">🇺🇿 Uzbekistan (+998)</option>
  <option value="+58">🇻🇪 Venezuela (+58)</option>
  <option value="+84">🇻🇳 Vietnam (+84)</option>
  <option value="+967">🇾🇪 Yemen (+967)</option>
  <option value="+260">🇿🇲 Zambia (+260)</option>
  <option value="+263">🇿🇼 Zimbabwe (+263)</option>
</select>

    {/* Phone Number */}
                    <input
                      type="text"
                      name="phone"
                      placeholder="00000 00000"
                      className="phone-number-input"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
    
  </div>
</div>
              </div>

              <div className="form-group">
                <label>General Inquiry</label>
                <select 
                  className="subject-select"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message Box</label>
                <textarea 
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-button" disabled={status.loading}>
                {status.loading ? "SENDING..." : "SEND MESSAGE"} <span className="arrow">→</span>
              </button>
            </form>
          </div>

          {/* RIGHT: DETAILS & QUOTE */}
          <div className="contact-sidebar">
            <div className="details-card">
              <h3>Contact Details</h3>
              
              <div className="detail-item">
                <span className="detail-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2875 15.4583 13.9625 15.625C14.6375 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z" fill="#C5C0FF"/>
</svg>
</span>
                <div>
                  <label>CUSTOMER CARE</label>
                  <p>+91 87543 68593</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H12V10H4V12ZM4 9H16V7H4V9ZM4 6H16V4H4V6ZM0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20ZM3.15 14H18V2H2V15.125L3.15 14ZM2 14V2V14Z" fill="#C5C0FF"/>
</svg>
</span>
                <div>
                  <label>WHATSAPP & SMS</label>
                  <p>+91 87543 68593</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V4V14V4Z" fill="#C5C0FF"/>
</svg>
</span>
                <div>
                  <label>EMAIL ADDRESS</label>
                  <p>support@dendo.store</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3 14.7L14.7 13.3L11 9.6V5H9V10.4L13.3 14.7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2167 18 14.1042 17.2208 15.6625 15.6625C17.2208 14.1042 18 12.2167 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18Z" fill="#C5C0FF"/>
</svg>
</span>
                <div>
                  <label>BUSINESS HOURS</label>
                  <p>Mon-Sun: 9 AM - 12 PM</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon"><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#C5C0FF"/>
</svg>
</span>
                <div>
                  <label>HQ</label>
                  <p>Dharmapuri</p>
                </div>
              </div>

              <div className="social-connect">
                <label>SOCIAL CONNECT</label>
                <div className="social-icons">
                  <span className="social-icon"><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 16.6667C11.8056 16.6667 11.2153 16.4236 10.7292 15.9375C10.2431 15.4514 10 14.8611 10 14.1667C10 14.0833 10.0208 13.8889 10.0625 13.5833L4.20833 10.1667C3.98611 10.375 3.72917 10.5382 3.4375 10.6562C3.14583 10.7743 2.83333 10.8333 2.5 10.8333C1.80556 10.8333 1.21528 10.5903 0.729167 10.1042C0.243056 9.61806 0 9.02778 0 8.33333C0 7.63889 0.243056 7.04861 0.729167 6.5625C1.21528 6.07639 1.80556 5.83333 2.5 5.83333C2.83333 5.83333 3.14583 5.89236 3.4375 6.01042C3.72917 6.12847 3.98611 6.29167 4.20833 6.5L10.0625 3.08333C10.0347 2.98611 10.0174 2.89236 10.0104 2.80208C10.0035 2.71181 10 2.61111 10 2.5C10 1.80556 10.2431 1.21528 10.7292 0.729167C11.2153 0.243056 11.8056 0 12.5 0C13.1944 0 13.7847 0.243056 14.2708 0.729167C14.7569 1.21528 15 1.80556 15 2.5C15 3.19444 14.7569 3.78472 14.2708 4.27083C13.7847 4.75694 13.1944 5 12.5 5C12.1667 5 11.8542 4.94097 11.5625 4.82292C11.2708 4.70486 11.0139 4.54167 10.7917 4.33333L4.9375 7.75C4.96528 7.84722 4.98264 7.94097 4.98958 8.03125C4.99653 8.12153 5 8.22222 5 8.33333C5 8.44444 4.99653 8.54514 4.98958 8.63542C4.98264 8.72569 4.96528 8.81944 4.9375 8.91667L10.7917 12.3333C11.0139 12.125 11.2708 11.9618 11.5625 11.8438C11.8542 11.7257 12.1667 11.6667 12.5 11.6667C13.1944 11.6667 13.7847 11.9097 14.2708 12.3958C14.7569 12.8819 15 13.4722 15 14.1667C15 14.8611 14.7569 15.4514 14.2708 15.9375C13.7847 16.4236 13.1944 16.6667 12.5 16.6667ZM12.5 15C12.7361 15 12.934 14.9201 13.0938 14.7604C13.2535 14.6007 13.3333 14.4028 13.3333 14.1667C13.3333 13.9306 13.2535 13.7326 13.0938 13.5729C12.934 13.4132 12.7361 13.3333 12.5 13.3333C12.2639 13.3333 12.066 13.4132 11.9062 13.5729C11.7465 13.7326 11.6667 13.9306 11.6667 14.1667C11.6667 14.4028 11.7465 14.6007 11.9062 14.7604C12.066 14.9201 12.2639 15 12.5 15ZM2.5 9.16667C2.73611 9.16667 2.93403 9.08681 3.09375 8.92708C3.25347 8.76736 3.33333 8.56944 3.33333 8.33333C3.33333 8.09722 3.25347 7.89931 3.09375 7.73958C2.93403 7.57986 2.73611 7.5 2.5 7.5C2.26389 7.5 2.06597 7.57986 1.90625 7.73958C1.74653 7.89931 1.66667 8.09722 1.66667 8.33333C1.66667 8.56944 1.74653 8.76736 1.90625 8.92708C2.06597 9.08681 2.26389 9.16667 2.5 9.16667ZM12.5 3.33333C12.7361 3.33333 12.934 3.25347 13.0938 3.09375C13.2535 2.93403 13.3333 2.73611 13.3333 2.5C13.3333 2.26389 13.2535 2.06597 13.0938 1.90625C12.934 1.74653 12.7361 1.66667 12.5 1.66667C12.2639 1.66667 12.066 1.74653 11.9062 1.90625C11.7465 2.06597 11.6667 2.26389 11.6667 2.5C11.6667 2.73611 11.7465 2.93403 11.9062 3.09375C12.066 3.25347 12.2639 3.33333 12.5 3.33333Z" fill="#E5E1E7"/>
</svg>
</span>
                  
                  <a
  href="mailto:support@dendo.store"
  className="social-icon"
  title="Email"
>
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333V9.54167C16.6667 10.3611 16.3854 11.059 15.8229 11.6354C15.2604 12.2118 14.5694 12.5 13.75 12.5C13.2639 12.5 12.8056 12.3958 12.375 12.1875C11.9444 11.9792 11.5833 11.6806 11.2917 11.2917C10.8889 11.6944 10.434 11.9965 9.92708 12.1979C9.42014 12.3993 8.88889 12.5 8.33333 12.5C7.18056 12.5 6.19792 12.0938 5.38542 11.2812C4.57292 10.4688 4.16667 9.48611 4.16667 8.33333C4.16667 7.18056 4.57292 6.19792 5.38542 5.38542C6.19792 4.57292 7.18056 4.16667 8.33333 4.16667C9.48611 4.16667 10.4688 4.57292 11.2812 5.38542C12.0938 6.19792 12.5 7.18056 12.5 8.33333V9.54167C12.5 9.90278 12.6181 10.2083 12.8542 10.4583C13.0903 10.7083 13.3889 10.8333 13.75 10.8333C14.1111 10.8333 14.4097 10.7083 14.6458 10.4583C14.8819 10.2083 15 9.90278 15 9.54167V8.33333C15 6.47222 14.3542 4.89583 13.0625 3.60417C11.7708 2.3125 10.1944 1.66667 8.33333 1.66667C6.47222 1.66667 4.89583 2.3125 3.60417 3.60417C2.3125 4.89583 1.66667 6.47222 1.66667 8.33333C1.66667 10.1944 2.3125 11.7708 3.60417 13.0625C4.89583 14.3542 6.47222 15 8.33333 15H12.5V16.6667H8.33333ZM8.33333 10.8333C9.02778 10.8333 9.61806 10.5903 10.1042 10.1042C10.5903 9.61806 10.8333 9.02778 10.8333 8.33333C10.8333 7.63889 10.5903 7.04861 10.1042 6.5625C9.61806 6.07639 9.02778 5.83333 8.33333 5.83333C7.63889 5.83333 7.04861 6.07639 6.5625 6.5625C6.07639 7.04861 5.83333 7.63889 5.83333 8.33333C5.83333 9.02778 6.07639 9.61806 6.5625 10.1042C7.04861 10.5903 7.63889 10.8333 8.33333 10.8333Z" fill="#E5E1E7"/>
</svg>

</a>
                </div>
              </div>
            </div>

            <div className="quote-card">
              <p>"Luxury is not just in the delivery, it's in the dialogue. We value every interaction as a chance to refine our craft."</p>
              <span className="quote-author">— DENDO TEAM</span>
            </div>
          </div>

        </div>
      </section>

      
    </div>
  );
};

export default Contact;
