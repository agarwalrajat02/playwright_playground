const SELECTORS = {
  // Login Page Selectors
  USERNAME_PASSWORD: "//input[@id='password']",
  saucelab_backpack: "//div[text()='Sauce Labs Backpack']",
  saucelab_report: "//div[@class='inventory_details_desc large_size']",
  Add_To_Cart: "//button[@id='add-to-cart']",
  product_link: "//div[normalize-space()='Sauce Labs Backpack']",
  cart_link: "//a[@class='shopping_cart_link']",
  checkout_page: "//button[@id='checkout']",
  checkout_firstname: "//input[@id='first-name']",
  chcekout_lastname: "//input[@id='last-name']",
  checkput_postalcode: "//input[@id='postal-code']",
  chcekout_continue: "//input[@id='continue']",
  checkout_finish: "//button[@id='finish']",

  rupyy_loans: "//a[@title='Loans']",

  two_wheeler_loan: "//a[@title='Loan Against Car']",

  no_loan: "//button[contains(@class,'banner-btn2')]",

  mobile_number: "//input[@id='loginOTPMobile']",

  otp: "//input[@id='otp']",

  home_pincode: "//input[contains(@name, 'homePincode')]",
  PAN: "//input[contains(@name, 'pan')]",
  day: "//input[contains(@name, 'day')]",
  month: "//input[contains(@name, 'month')]",
  year: "//input[contains(@name, 'year')]",
  whatsapp_check: "//input[@name='whatsappOptIn']",

  continue: "//div[contains(text(),'Continue')]",

  tnc: "//input[contains(@class,'optional')]",

  fullnmae : "//input[contains(@data-gsv-err-msg, 'full name')]",
  fathersname: "//input[contains(@data-gsv-err-msg, 'Father name')]",
  emailid: "//input[contains(@data-gsf-name, 'personalEmail')]",
  gender: "//span[@id='gender0']",
  submit: "//button[@name='submitBtn']",
  newapplication: "//div[contains(text(),'New Application')]",

  residence_type: "//input[@id='residenceType']",
  resident_type_option: "//li[contains(@data-value, 'Owned by Self/Spouse')]",
  residence_period: "//input[@id='stayPeriod']",
  periodmorethan12: "//li[@data-value='More than 12 months']",
  address: "//input[contains(@data-gsv-type, 'address')]",

  employment: "//input[@id='employmentType']",
  employment_selection: "//em[text()='Salaried']",
  employer_name: "//input[@id='employerName']",
  employer_choice: "//em[text()='GIRNARSOFT AUTOMOBILES PRIVATE LIMITED']",

  salary: "//input[contains(@name, 'salary')]",
  totalex: "//input[contains(@name, 'totalExp')]",
  car_reg: "//input[contains(@name, 'registrationNumber')]",
  existingloan: "//input[@id='loanAgainstCar']",
  nooption: "//em[normalize-space()='No']",
  usagetype: "//input[@id='usageType']",
  personal: "//em[normalize-space()='Personal']",
  makeyear: "//input[@id='makeYear']",
  makeyearinput: "//em[normalize-space()='2024']",
  model: "//input[@id='selectedMMv']",
  nexon: "//em[text()='Tata Nexon']",
  variant: "//input[@id='selectedVariant']",
  variantinput: "//em[normalize-space()='Creative Plus S DT Diesel AMT']", 
  pan: "//div[@id='panCard']",
  upload_button: "//input[@id='upload']", 
  upload_now: "//div[contains(text(),'Upload Now')]",
  permanentaddress : "//input[@id='proofOfPermanentAddress']",
  aadhar: "//em[normalize-space()='Aadhaar']",
  registration_certificate: "//div[@id='registrationCertificate']",

//make my trip selectors
cross_button: "//span[@class='commonModal__close']",
hotel_click: "//a[@class='headerIcons makeFlex hrtlCenter column active']",
hotel_input: "//span[normalize-space()='City, Property name or Location']",
check_indate: "//p[@data-cy='checkInDate']",
date_checkin: "//div[@aria-label='Sat Jun 28 2025']",

date_checkout: "//p[@data-cy='checkOutDate']",
check_outdate: "//div[@aria-label='Sun Jun 29 2025']",

search_button_mmt: "//button[@id='hsw_search_button']",

sort_highest: "",
hotel_mmt: "//div[@id='Listing_hotel_0']//div//div//div[contains(@class,'flexOne makeFlex')]",


basecost: "//span[@class='font28 blackText latoBlack']",
tax: "//span[@class='font16 appendLeft5']",
where_do_want_to_go: "//input[@placeholder='Where do you want to stay?']",
harshil: "//div[normalize-space()='Area in Gangotri']",
apply_mmt: "//button[normalize-space()='APPLY']",
};

module.exports = { SELECTORS };
