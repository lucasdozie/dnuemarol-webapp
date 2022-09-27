function Filters() {
  return (
    <>
      <div className="item-center mb-10">
        <div className="flex mb-10">
          <div className="flex px-5">
            <p className="px-3">Department</p>
            <select className="px-3">
              <option val="">Any Department</option>
              <option val="1">Backend</option>
              <option val="2">Compliance</option>
              <option val="3">Frontend</option>
              <option val="4">Quality Assurance</option>
              <option val="5">Mobile android</option>
              <option val="6">Mobile IOS</option>
            </select>
          </div>
          <div className="flex px-5">
            <p className="px-3">Location</p>
            <select className="px-3">
              <option val="">Location</option>
              <option val="1">Nigeria</option>
              <option val="2">United States</option>
              <option val="3">Canada</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
