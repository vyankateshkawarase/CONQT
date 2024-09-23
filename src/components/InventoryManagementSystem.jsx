import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";

const InventoryManagementSystem = () => {
  const [inputValue, setinputValue] = useState("");
  const [datalist, setdataList] = useState([]);
  const [itemName, setitemName] = useState("");
  const [quantity, setquantity] = useState("");
  const [unitprice, setunitPrice] = useState("");
  const [dateofSub, setdateofSub] = useState("");
  const [sName, setsName] = useState("");
  const [cName, setcName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState("");
  const [email, setemail] = useState("");

  const CountryCity = {
    USA: ["LA", "SF", "NY", "NJ"],
    India: ["Nagpur", "Mumbai", "Pune"],
  };

  const handleCountrySave = (e) => {
    const country = e.target.value;
    setCountry(country);
    setState(CountryCity[country] || []);
  };

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSaveData = () => {
    if (
      inputValue.trim() &&
      itemName.trim() &&
      quantity.trim() &&
      unitprice.trim() &&
      dateofSub.trim() &&
      sName.trim() &&
      cName.trim() &&
      //   country.trim() &&
      //   state.trim() &&
      city.trim() &&
      email.trim()
    ) {
      setdataList([
        ...datalist,
        {
          inputValue,
          itemName,
          quantity,
          unitprice,
          dateofSub,
          sName,
          cName,
          country,
          state,
          city,
          email,
        },
      ]);
      setinputValue("");
      setitemName("");
      setquantity("");
      setunitPrice("");
      setdateofSub("");
      setsName("");
      setcName("");
      setCountry("");
      setState("");
      setCity("");
      setemail("");
    }
  };

  return (
    <>
      {/* Item Details */}
      <Typography className="flex justify-center font-semibold text-3xl mb-4">
        Item Details
      </Typography>
      <div className="flex justify-center gap-4 flex-col">
        <div className="flex flex-row gap-4 m-">
          <Input
            type="text"
            value={itemName}
            onChange={(e) => setitemName(e.target.value)}
            label="Enter item name"
          />
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
            label="Enter Quantity"
          />
        </div>
        <div className="flex flex-row gap-4 m-">
          <Input
            type="number"
            value={unitprice}
            onChange={(e) => setunitPrice(e.target.value)}
            label="Enter unit price"
          />
          <Input
            type="date"
            value={dateofSub}
            onChange={(e) => setdateofSub(e.target.value)}
            label="Enter Date of Submission"
          />
        </div>
        <Input
          value={inputValue}
          onChange={handleChange}
          type="text"
          label="Enter any"
        />

        {/* Supplier Details */}

        <Typography className="flex justify-center font-semibold text-3xl mb-4">
          Supplier Details
        </Typography>
        <div className="flex flex-row gap-4 m-">
          <Input
            type="text"
            value={sName}
            onChange={(e) => setsName(e.target.value)}
            label="Enter Supplier name"
          />
          <Input
            type="text"
            value={cName}
            onChange={(e) => setcName(e.target.value)}
            label="Enter Company name"
          />
        </div>

        <div className="flex flex-row gap-4 m-">
          <select
            label="Select Country"
            name="country"
            onChange={handleCountrySave}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
          </select>
          <select
            label="Select City"
            name="state"
            disabled={!country}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select State</option>
            <option value="SF">SF</option>
            <option value="LA">LA</option>
            <option value="NJ">NJ</option>
            <option value="NY">NY</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            {/* {state.map((state,index) => (
                <option key={index} value={state}>
                    {state}
                </option>
            ))} */}
          </select>
        </div>

        {/* <div className="flex flex-row gap-4 m-">
          <select label="Select Country" name="country">
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
          </select>
          <select label="Select City"  name="state">
            <option value="">Select State</option>
            <option value="">LA</option>
            <option value="">SF</option>
          </select>
        </div> */}

        <div className="flex flex-row gap-4 m-">
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="Enter your City"
          />
          <Input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            label="Enter your email"
          />
        </div>

        <Button
          color="blue"
          className="flex justify-center items-center text-center"
          onClick={handleSaveData}
        >
          Save Changes
        </Button>

        <div>
          {datalist.length > 0 ? (
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-center">Sr.No.</th>
                  <th className="border px-4 py-2 text-center">Item Name</th>
                  <th className="border px-4 py-2 text-center">Quantity</th>
                  <th className="border px-4 py-2 text-center">Unit Price</th>
                  <th className="border px-4 py-2 text-center">
                    Date of Submission
                  </th>
                  <th className="border px-4 py-2 text-center">
                    Supplier Name
                  </th>
                  <th className="border px-4 py-2 text-center">Company Name</th>
                  <th className="border px-4 py-2 text-center">Country</th>
                  <th className="border px-4 py-2 text-center">State</th>
                  <th className="border px-4 py-2 text-center">City</th>
                  <th className="border px-4 py-2 text-center">
                    Email Address
                  </th>
                  {/* <th className="border px-4 py-2 text-center">
                    Date of Submission
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {datalist.map((data, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.itemName}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.quantity}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.unitprice}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.dateofSub}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.sName}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.cName}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.country}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.state}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.city}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Typography className="flex justify-center font-semibold text-xl mb-4">
              No Data Available
            </Typography>
          )}
        </div>
      </div>
    </>
  );
};

export default InventoryManagementSystem;
