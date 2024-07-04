
const PreciosPage = () => {
    return (

         <div class="cards">
    <div class="card shadow">
      <ul>
        <li class="pack">Standard</li>
        <li id="basic" class="price bottom-bar">&dollar;199.99</li>
        <li class="bottom-bar">500 GB Storage</li>
        <li class="bottom-bar">2 Users Allowed</li>
        <li class="bottom-bar">Send up to 3 GB</li>
        <li class="bottom-bar">50 Email Accounts</li>
        <li><button class="btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
      </ul>
    </div>
    <div class="card active">
      <ul>
        <li class="pack">Professional</li>
        <li id="professional" class="price bottom-bar">&dollar;249.99</li>
        <li class="bottom-bar">1 TB Storage</li>
        <li class="bottom-bar">5 Users Allowed</li>
        <li class="bottom-bar">Send up to 10 GB</li>
        <li class="bottom-bar">Unlimited Email Accounts</li>
        <li><button class="btn active-btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
      </ul>
    </div>
    <div class="card shadow">
      <ul>
        <li class="pack">Master</li>
        <li id="master" class="price bottom-bar">&dollar;399.99</li>
        <li class="bottom-bar">2 TB Storage</li>
        <li class="bottom-bar">10 Users Allowed</li>
        <li class="bottom-bar">Send up to 20 GB</li>
        <li class="bottom-bar">Unlimited Email Accounts</li>
        <li><button class="btn"><i class="bi bi-bag"></i>&nbsp Order Now</button></li>
      </ul>
    </div>
  </div>
  
    );
  };

export default PreciosPage;