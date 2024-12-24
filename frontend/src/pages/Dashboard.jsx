import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="navbar">
        <div className="logo">Pay-Free</div>
        <nav>
          <ul>
            <li>Help Center</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Vijay Kumar Varma</li>
          </ul>
        </nav>
      </header>

      <main className="dashboard-content">
        <section className="dashboard-main">
          <div className="info-banner">
            You have no pending dues 😊.{" "}
            <a href="#see-where">See where all you can use Pay-Free.</a>
          </div>

          <div className="spending-info">
            <div className="card">
              <h3>Total Spent</h3>
              <h2>₹0.00</h2>
              <p>1 Active Account</p>
            </div>
            <div className="account-card">
              <h4>Available Limit</h4>
              <h2>₹6000</h2>
              <p>Spent till now ₹0.00</p>
              <p>Due by Jan 3, 2025</p>
            </div>
          </div>
        </section>

        <aside className="dashboard-sidebar">
          <h3>Where Can I Use Pay-Free?</h3>
          <ul className="mt-1">
            <a href="http://www.bigbasket.com/"><li>Big Basket</li></a>
            <a href="http://www.zomato.com/"><li>Zomata</li></a>
            <a href="http://www.dunzo.com/"><li>Dunzo</li></a>
            <a href="http://www.jiomart.com/"><li>JioMart</li></a>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default Dashboard;
