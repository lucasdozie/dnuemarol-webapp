<div class="form-group">
        <label for="exampleInputName">Full Name</label>
        <input type="text" name="fullname" class="form-control" id="exampleInputName" placeholder="Enter your name and surname" required="required">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1" required="required">Email address</label>
        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address">
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" name="address" class="form-control" id="inputAddress" placeholder="1234 Main St">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" name="city" class="form-control" id="inputCity" placeholder="Istanbul">
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" name="zip" class="form-control" id="inputZip" placeholder="34000">
        </div>
      </div>
      <div class="form-group">
        <label for="example-tel-input" class="col-2 col-form-label">Telephone</label>
        <div class="col-10">
          <input class="form-control" name="tel" type="tel" value="1-(555)-555-5555" id="example-tel-input">
        </div>
      </div>
      <div class="form-group">
        <label for="example-date-input" class="col-3 col-form-label">Start Date</label>
        <div class="col-10">
          <input class="form-control" name="starting_date" type="date" value="2020-02-01" id="example-date-input">
        </div>
      </div>
      <div class="form-group mt-3">
        <label class="mr-4">Upload your CV:</label>
        <input type="file" name="file">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</body>

</html>






<body class="bg-gray-400">
  <header class="header">
    <div class="notifications">
               
    </div>
    <nav class="flex items-center justify-between flex-wrap px-6" style="height: 65px;">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <span class="font-semibold text-xl tracking-tight">Job Board</span>
      </div>
 
        <div class="flex items-center h-full">
          <a href="#" class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full mr-3">
            Post Job
          </a>
          
          <div class="dropdown relative flex items-center h-full hover:bg-gray-500 px-2 transition">
            <button class="inline-flex items-center h-full">
              <span class="mr-1">Account</span>
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </button>
            
            <ul class="dropdown-menu absolute bg-white shadow hidden w-32">
              <li><a href="#" class="py-1 px-4 block hover:bg-gray-200 whitespace-no-wrap">Tina</a></li>
              <li><a href="#" class="py-1 px-4 block hover:bg-gray-200 whitespace-no-wrap">Log out</a></li>
            </ul>
            
                    
          </div> <!-- end .dropdown -->
        </div>
      </div>
    </nav>
  </header>
  
  <main class="main bg-white px-6 md:px-16 py-6">
    <div class="w-full max-w-xl mx-auto">
      <form action="" method="post">
        <h1 class="text-2xl mb-2">Post new job</h1>
        
        <div class="job-info border-b-2 py-2 mb-5">
          <!--    Title      -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="job-title">Title</label>
            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="email" id="job-title" name="job-title" placeholder="Frontend Developer" autofocus>
          </div>

          <!--     Link to apply     -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="apply-link">Link to apply</label>
            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="email" id="apply-link" name="apply-link" placeholder="https://www.djangoproject.com/apply">
          </div>

          <div class="md:flex md:justify-between">
            <!--      Job Type      -->
            <div class="w-full md:w-3/12 mb-4 md:mb-0">
                <label class="block text-gray-700 text-sm mb-2" for="job-type">
                  Job Type
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="job-type">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Freelance</option>
                    <option>Contract</option>
                  </select>

                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
            </div>

            <!--     Location       -->
            <div class="w-full md:w-8/12 mb-4 md:mb-0">
              <label for="location" class="block text-gray-700 text-sm mb-2">Location</label>
              <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="location" name="location" placeholder="Schwerin">

              <div>
                <label class="text-gray-600 flex items-center" for="remote">
                  <input class="mr-2 leading-tight" type="checkbox" id="remote">
                  <span class="text-sm">Work can be done remotely</span>
                </label>
              </div>
            </div>
          </div> <!-- end group -->

          <!--    Description      -->
          <div>
            <label for="description" class="block text-gray-700 text-sm mb-2">Description</label>
            <textarea name="description" id="description" cols="" rows=""></textarea>
          </div>

          <div class="flex flex-wrap -mx-3">
            <!--     Company       -->
            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label for="company" class="block text-gray-700 text-sm mb-2">Company</label>
              <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="Company">
            </div>

            <!--      Company Website      -->
            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label for="company" class="block text-gray-700 text-sm mb-2">Company Website</label>
              <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="https://www.djangoproject.com/">
            </div>
          </div> <!-- end group -->

          <!--      Company Website      -->
          <div class="mb-4 md:mb-0">
            <label for="company-logo" class="block text-gray-700 text-sm mb-2">Logo Image</label>
            <input type="file" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-logo" name="company-logo">
          </div>
        </div> <!-- end job-info -->
        
        <div class="payment mb-6">
          
          <h4 class="mb-2">Payment</h4>
          <p class="bg-gray-200 py-3 text-center text-sm">
            <span><i class="far fa-credit-card"></i></span>
            All jobs cost <strong>€300</strong> for 30 days.
          </p>
          
        </div>
        
        
        <!--     Submit     -->
        <div>
          <button class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit">Create job</button>
        </div>
      </form>
    </div>
  </main>
  
  <footer class="footer py-4">
    <p class="text-center text-gray-600 text-xs">
      &copy;2020 Coded by Bledi Dalipaj
    </p>
  </footer>
</body>
</html>






<h1 id="title">Application Form</h1>
<div id="form-container">
  <p id="description">Thank you for your interest in working with us. Please check below for available job opportunities that meet your criteria and send your application by filling out the Job Application Form.</p>
  <form>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">* Full Name: </label>
      </div>
  <div class="rightTab">
        <input autofocus type="text" name="name" id="name" class="input-field" placeholder="Enter your full name" required>
      </div>
   </div>
    <div class="rowTab">
      <div class="labels">
        <label id="email-label" for="email">* Email: </label>
      </div>
      <div class="rightTab">
        <input type="email" name="email" id="email" class="input-field" required placeholder="Enter your Email">
      </div>
    </div>
<div class="rowTab">
      <div class="labels">
        <label id="number-label" for="age">* Age: </label>
      </div>
      <div class="rightTab">
        <input type="number" name="age" id="number" min="1" max="125" class="input-field" placeholder="Age">
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label for="currentPos">Which option best describes your current role?</label>
      </div>
      <div class="rightTab">
        <select id="dropdown" name="currentPos" class="dropdown">
      <option disabled value>Select an option</option>
      <option  value="student">Student</option>
      <option value="job">Full Time Job</option>
     <option value="remote-job">Remote Job</option>
     <option value="intern">Intern</option>
      <option value="other">Other</option>
    </select>
      </div>
    </div>
<div class="rowTab">
      <div class="labels">
        <label for="userRating">* Would you like to list references?</label>
      </div>
      <div class="rightTab">
        <ul style="list-style: none;">
          <li class="radio"><label>Yes<input name="radio-buttons" value="1"  type="radio" class="userRatings" ></label></li>
          <li class="radio"><label>No<input name="radio-buttons" value="2"  type="radio" class="userRatings" ></label></li>
        </ul>
      </div>
    </div>
<div class="rowTab">
      <div class="labels">
        <label for="most-like">Which position would you like to apply for? </label>
      </div>
      <div class="rightTab">
        <select id="most-like" name="mostLike" class="dropdown">
      <option disabled selected value>Select an option</option>
      <option value="front-end">Front-end</option>
      <option value="fullstack">Fullstack</option>
      <option value="projectManager">Project Manager</option>
      <option value="javaDeveloper">Java Developer</option>
      <option value="artificialintelligenceExpert">AI expert</option>
    </select>
      </div>
    </div>
<div class="rowTab">
      <div class="labels">
        <label for="preferences">Which programming languages do you know?</label>
      </div>
      <div class="rightTab">
        <ul id="preferences" style="list-style: none;">
          <li class="checkbox"><label><input name="prefer" value="1" type="checkbox" class="userRatings">Java</label></li>
          <li class="checkbox"><input name="prefer" value="2" type="checkbox" class="userRatings">Python</li>
          <li class="checkbox"><label><input name="prefer" value="3" type="checkbox" class="userRatings">JavaScript</label></li>
          <li class="checkbox"><label><input name="prefer" value="4" type="checkbox" class="userRatings">C++</label></li>
          <li class="checkbox"><label><input name="prefer" value="5" type="checkbox" class="userRatings">Swift</label></li>
          <li class="checkbox"><label><input name="prefer" value="6" type="checkbox" class="userRatings">Ruby</label></li>
          <li class="checkbox"><label><input name="prefer" value="7" type="checkbox" class="userRatings">.NET</label></li>
          <li class="checkbox"><label>
        </ul>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label for="comments">Any Comments?</label>
      </div>
      <div class="rightTab">
        <textarea id="comments" class="input-field" style="height:50px;resize:vertical;" name="comment" placeholder="Enter your comment here..."></textarea>
      </div>
    </div>
  <div id="wrapper">
    <button id="submit" type="submit">Submit</button> </div>
  </form>

</div>
  




<form id="job-form">
  <section>
    <h2 class="form-section-title">Personal Information</h2>
    <div class="row">
      <div class="col-4">
        <label class="form-label">First Name</label>
        <input name="first-name" id="first-name" type="text" required />
      </div>
      <div class="col-4">
        <label class="form-label">MI</label>
        <input name="middle-initial" type="text" />
      </div>
      <div class="col-4">
        <label class="form-label">Last Name</label>
        <input name="last-name" type="text" required />
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <label class="form-label">Social Security Number</label>
        <input name="ssn" type="password" />
      </div>
    </div>
    <div class="row">
      <div class="col-7">
        <label class="form-label">Email</label>
        <input name="email" type="email" required />
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <label class="form-label">Street Address</label>
        <input name="address-1" type="text" placeholder="Address Line 1" />
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <input name="address-2" type="text" placeholder="Address Line 2" />
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <input name="city" type="text" placeholder="City" />
      </div>
      <div class="col-4">
        <input name="state" type="text" placeholder="State" />
      </div>
      <div class="col-4">
        <input name="zipcode" type="text" placeholder="Zip Code" />
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <label class="form-label">Home Phone</label>
        <input name="home-phone" type="text" />
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <label class="form-label">Mobile Phone</label>
        <input name="mobile-phone" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <label class="form-label">Are you entitled to work in the United States?</label>
        <input name="us-work" type="radio" value="yes" required /><span class="radio-selection"> Yes</span> <input name="us-work" type="radio" value="no" /><span class="radio-selection"> No</span>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <label class="form-label">Are you 18 or older?</label>
        <input name="older-than-18" type="radio" value="yes" required /><span class="radio-selection"> Yes</span> <input name="older-than-18" type="radio" value="no" /><span class="radio-selection"> No</span>
      </div>
      <div class="col-3">
        <label class="form-label">If yes, Date of Birth</label>
        <input name="date-of-birth" type="date" />
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <label class="form-label">Have you been convicted of a misdemeanor or felony, or been incarcerated in connection with a felony, in the past seven years?</label>
        <input name="convicted" type="radio" value="yes" required /><span class="radio-selection"> Yes</span> <input name="convicted" type="radio" value="no" /><span class="radio-selection"> No</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <label class="form-label">If yes, please explain:</label>
        <input name="convicted-reason" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <label class="form-label">Military Service?</label>
        <input name="military-service" type="radio" value="yes" required /><span class="radio-selection"> Yes</span> <input name="military-service" type="radio" value="no" /><span class="radio-selection"> No</span>
      </div>
      <div class="col-3">
        <label class="form-label">If yes, which branch?</label>
        <input name="military-branch" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <label class="form-label">Are you a veteran?</label>
        <input name="veteran" type="radio" value="yes" required /><span class="radio-selection"> Yes</span> <input name="veteran" type="radio" value="no" /><span class="radio-selection"> No</span>
      </div>
      <div class="col-3">
        <label class="form-label">If yes, which war?</label>
        <input name="war" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <label class="form-label">What position are you applying for?</label>
        <input name="position-application" type="text" required />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <label class="form-label">How did you hear about this position?</label>
        <input name="job-source" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <label class="form-label">Expected Hourly Rate</label>
        <input name="expected-hourly-rate" type="text" required />
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <label class="form-label">Expected Weekly Earnings</label>
        <input name="expected-weekly-earnings" type="text" required />
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <label class="form-label">Date Available</label>
        <input name="date-available" type="date" required />
      </div>
    </div>
  </section>


  <section>
    <h2 class="form-section-title">Prior Work Experience</h2>
    <section class="form-field-section">
      <h3 class="form-section-title">Current or Most Recent</h3>
    </section>
    <section class="form-field-section">
      <div class="row">
        <div class="col-9">
          <label class="form-label">Employer</label>
          <input name="emp1-employer" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-9">
          <label class="form-label">Address</label>
          <input name="emp1-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <input name="emp1-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input name="emp1-city" type="text" placeholder="City" />
        </div>
        <div class="col-4">
          <input name="emp1-state" type="text" placeholder="State" />
        </div>
        <div class="col-4">
          <input name="emp1-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-3">
          <label class="form-label">Phone</label>
          <input name="emp1-phone" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <label class="form-label">Name of Immediate Supervisor</label>
          <input name="emp1-supervisor" type="text" />
        </div>
      </div>
    </section>
    <section class="form-field-section">
      <div class="row">
        <div class="col-3">
          <label class="form-label">Start Date</label>
          <input name="emp1-start-date" type="date" />
        </div>
        <div class="col-3">
          <label class="form-label">End Date</label>
          <input name="emp1-end-date" type="date" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-5">
          <label class="form-label">Position/Job Title</label>
          <input name="emp1-title" type="text" />
        </div>
        <div class="col-3">
          <label class="form-label">Payrate</label>
          <input name="emp1-payrate" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-12">
          <label class="form-label">Reason for Leaving</label>
          <input name="emp1-reason-for-leaving" type="text" />
        </div>
        <div class="col-12">
          <label class="form-label">May We Contact?</label>
          <input name="emp1-can-contact" type="radio" value="yes" /><span class="radio-selection"> Yes</span> <input name="emp1-can-contact" type="radio" value="no" /><span class="radio-selection"> No</span>
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <h3 class="form-section-title">Prior</h3>
    </section>


    <section class="form-field-section">
      <div class="row">
        <div class="col-9">
          <label class="form-label">Employer</label>
          <input name="emp2-employer" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-9">
          <label class="form-label">Address</label>
          <input name="emp2-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <input name="emp2-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input name="emp2-city" type="text" placeholder="City" />
        </div>
        <div class="col-4">
          <input name="emp2-state" type="text" placeholder="State" />
        </div>
        <div class="col-4">
          <input name="emp2-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-3">
          <label class="form-label">Phone</label>
          <input name="emp2-phone" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <label class="form-label">Name of Immediate Supervisor</label>
          <input name="emp2-supervisor" type="text" />
        </div>
      </div>
    </section>
    <section class="form-field-section">
      <div class="row">
        <div class="col-3">
          <label class="form-label">Start Date</label>
          <input name="emp2-start-date" type="date" />
        </div>
        <div class="col-3">
          <label class="form-label">End Date</label>
          <input name="emp2-end-date" type="date" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-5">
          <label class="form-label">Position/Job Title</label>
          <input name="emp2-title" type="text" />
        </div>
        <div class="col-3">
          <label class="form-label">Payrate</label>
          <input name="emp2-payrate" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-12">
          <label class="form-label">Reason for Leaving</label>
          <input name="emp2-reason-for-leaving" type="text" />
        </div>
        <div class="col-12">
          <label class="form-label">May We Contact?</label>
          <input name="emp2-can-contact" type="radio" value="yes" /><span class="radio-selection"> Yes</span> <input name="emp2-can-contact" type="radio" value="no" /><span class="radio-selection"> No</span>
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <h3 class="form-section-title">Prior</h3>
    </section>


    <section class="form-field-section">
      <div class="row">
        <div class="col-9">
          <label class="form-label">Employer</label>
          <input name="emp3-employer" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-9">
          <label class="form-label">Address</label>
          <input name="emp3-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <input name="emp3-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input name="emp3-city" type="text" placeholder="City" />
        </div>
        <div class="col-4">
          <input name="emp3-state" type="text" placeholder="State" />
        </div>
        <div class="col-4">
          <input name="emp3-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-3">
          <label class="form-label">Phone</label>
          <input name="emp3-phone" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <label class="form-label">Name of Immediate Supervisor</label>
          <input name="emp3-supervisor" type="text" />
        </div>
      </div>
    </section>
    <section class="form-field-section">
      <div class="row">
        <div class="col-3">
          <label class="form-label">Start Date</label>
          <input name="emp3-start-date" type="date" />
        </div>
        <div class="col-3">
          <label class="form-label">End Date</label>
          <input name="emp3-end-date" type="date" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-5">
          <label class="form-label">Position/Job Title</label>
          <input name="emp3-title" type="text" />
        </div>
        <div class="col-3">
          <label class="form-label">Payrate</label>
          <input name="emp3-payrate" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-12">
          <label class="form-label">Reason for Leaving</label>
          <input name="emp3-reason-for-leaving" type="text" />
        </div>
        <div class="col-12">
          <label class="form-label">May We Contact?</label>
          <input name="emp3-can-contact" type="radio" value="yes" /><span class="radio-selection"> Yes</span> <input name="emp3-can-contact" type="radio" value="no" /><span class="radio-selection"> No</span>
        </div>
      </div>
    </section>
  </section>

  <section>
    <h2 class="form-section-title">Education</h2>
    <section class="form-field-section">
      <h4 class="form-section-title">High School</h4>
      <div class="row">
        <div class="col-4">
          <label class="form-label">Name</label>
          <input name="high-school-name" type="text" />
        </div>
        <div class="col-4">
          <label class="form-label">Location</label>
          <input name="high-school-location" type="text" />
        </div>
        <div class="col-4">
          <label class="form-label">Last Year Completed</label>
          <select name="high-school-last-year-completed">
<option value="freshman">Freshman</option>
<option value="sophomore">Sophomore</option>
<option value="junior">Junior</option>
<option value="senior">Senior</option>
</select>
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-6">
          <label class="form-label">Degree</label>
          <input name="high-school-degree" type="text" />
        </div>
        <div class="col-6">
          <label class="form-label">Major or Emphasis</label>
          <input name="high-school-major" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <h4 class="form-section-title">College/University</h4>
      <div class="row">
        <div class="col-4">
          <label class="form-label">Name</label>
          <input name="college-name" type="text" />
        </div>
        <div class="col-4">
          <label class="form-label">Location</label>
          <input name="college-location" type="text" />
        </div>
        <div class="col-4">
          <label class="form-label">Last Year Completed</label>
          <select name="college-last-year-completed">
<option value="freshman">Freshman</option>
<option value="sophomore">Sophomore</option>
<option value="junior">Junior</option>
<option value="senior">Senior</option>
</select>
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-6">
          <label class="form-label">Degree</label>
          <input name="college-degree" type="text" />
        </div>
        <div class="col-6">
          <label class="form-label">Major or Emphasis</label>
          <input name="college-major" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <h4 class="form-section-title">Trade School</h4>
      <div class="row">
        <div class="col-4">
          <label class="form-label">Name</label>
          <input name="trade-school-name" type="text" />
        </div>
        <div class="col-4">
          <label class="form-label">Location</label>
          <input name="trade-school-location" type="text" />
        </div>
        <div class="col-4">
          <label class="form-label">Last Year Completed</label>
          <input name="trade-school-last-year-completed" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-6">
          <label class="form-label">Degree</label>
          <input name="trade-school-degree" type="text" />
        </div>
        <div class="col-6">
          <label class="form-label">Major or Emphasis</label>
          <input name="trade-school-major" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <h4 class="form-section-title">Other</h4>
      <div class="row">
        <div class="col-4">
          <label class="form-label">Name</label>
          <input name="other-school-name" type="text" />
        </div>
        <div class="col-4">
          <label class="form-label">Location</label>
          <input name="other-school-location" type="text" />
        </div>
        <div class="col-4">
          <label class="form-label">Last Year Completed</label>
          <input name="other-school-last-year-completed" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-6">
          <label class="form-label">Degree</label>
          <input name="other-school-degree" type="text" />
        </div>
        <div class="col-6">
          <label class="form-label">Major or Emphasis</label>
          <input name="other-school-major" type="text" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <div class="row">
        <div class="col-12">
          <label class="form-label">List any applicable special skills, training or proficiencies.</label>
          <input name="skills-training" type="text" />
        </div>
      </div>
    </section>
  </section>

  <section>
    <h2 class="form-section-title">Personal References</h2>
    <section class="form-field-section">
      <h4 class="form-section-title">Reference 1</h4>
      <div class="row">
        <div class="col-6">
          <label class="form-label">Name</label>
          <input name="ref1-name" type="text" />
        </div>
        <div class="col-6">
          <label class="form-label">Phone</label>
          <input name="ref1-phone" type="text" />
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <label class="form-label">Address</label>
          <input name="ref1-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <input name="ref1-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input name="ref1-city" type="text" placeholder="City" />
        </div>
        <div class="col-4">
          <input name="ref1-state" type="text" placeholder="State" />
        </div>
        <div class="col-4">
          <input name="ref1-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <h4 class="form-section-title">Reference 2</h4>
      <div class="row">
        <div class="col-6">
          <label class="form-label">Name</label>
          <input name="ref2-name" type="text" />
        </div>
        <div class="col-6">
          <label class="form-label">Phone</label>
          <input name="ref2-phone" type="text" />
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <label class="form-label">Address</label>
          <input name="ref2-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <input name="ref2-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input name="ref2-city" type="text" placeholder="City" />
        </div>
        <div class="col-4">
          <input name="ref2-state" type="text" placeholder="State" />
        </div>
        <div class="col-4">
          <input name="ref2-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>

    <section class="form-field-section">
      <h4 class="form-section-title">Reference 3</h4>
      <div class="row">
        <div class="col-6">
          <label class="form-label">Name</label>
          <input name="ref3-name" type="text" />
        </div>
        <div class="col-6">
          <label class="form-label">Phone</label>
          <input name="ref3-phone" type="text" />
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <label class="form-label">Address</label>
          <input name="ref3-address-1" type="text" placeholder="Address Line 1" />
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <input name="ref3-address-2" type="text" placeholder="Address Line 2" />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input name="ref3-city" type="text" placeholder="City" />
        </div>
        <div class="col-4">
          <input name="ref3-state" type="text" placeholder="State" />
        </div>
        <div class="col-4">
          <input name="ref3-zip" type="text" placeholder="Zip Code" />
        </div>
      </div>
    </section>
  </section>
  <input type="submit" value="Submit" />

</form>



<div class="form-group mt-3">
        <label class="mr-4">Upload your CV:</label>
        <input type="file" name="file">
      </div>
      <button type="submit" class="btn btn-submit">Submit</button>
    </form>
  </div>
</body>






