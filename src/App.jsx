import { useState } from "react";
import "./App.css";
import {
  Input,
  Typography,
  Divider,
  Button,
  Link,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#212731] h-[8.7vh] flex justify-center gap-[4%] pt-3 text-white flex-wrap">
        <div className="w-[16%] h-[70%] ml-[10%] bg-white rounded-lg">
          <SearchIcon color="action" fontSize="large" className="pl-1" />
        </div>
        <div>Categories</div>
        <div>Website Builder</div>
        <div>Today's deal</div>
      </div>
      <div className="h-max">
        <div className="flex-column">
          <div className="mt-10 ml-[16%]">
            <Typography variant="h3" color="disabled">
              Best Website builders in the US
            </Typography>
          </div>
          <div className="ml-[16%] mr-[15%] mt-2">
            <Divider />
          </div>
          <div className="flex ml-[16%] gap-[1%] mt-2 mb-2 text-gray-500">
            <div>
              <CheckCircleOutlineIcon color="disabled" />
            </div>
            <div>
              <Typography variant="h9" color="disabled">
                Last Updated-Febuary 22, 2020
              </Typography>
            </div>
            <div>
              <InfoOutlinedIcon color="disabled" />
            </div>
            <div>
              <Typography variant="h9" color={"disabled"}>
                Advertising disclosure
              </Typography>
            </div>
            <div className="ml-[35%]">
              <ExpandMoreOutlinedIcon />
              Top Relevant
            </div>
          </div>
          <div className="ml-[16%] mr-[15%]">
            <Divider />
          </div>
        </div>
        <div className="flex ml-[17%] mt-3 gap-[5%] text-gray-500">
          <div>Tools</div>
          <div>AWS Builder</div>
          <div>Start Build</div>
          <div>Build Supplies</div>
          <div>Tooling</div>
          <div>BlueHosting</div>
        </div>
        <div className="flex ml-[16%] mt-4 gap-[1%] text-gray-500">
          <div>
            Home <ArrowForwardIosOutlinedIcon fontSize="small" />{" "}
          </div>
          <div>
            Hosting for all <ArrowForwardIosOutlinedIcon fontSize="small" />
          </div>
          <div>
            Hosting <ArrowForwardIosOutlinedIcon fontSize="small" />
          </div>
          <div>
            Hosting6 <ArrowForwardIosOutlinedIcon fontSize="small" />
          </div>
          <div>
            Hosting5 <ArrowForwardIosOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div className="flex-column ml-[16%] m-8">
          <div className="">
            <Button
              variant="contained"
              color="warning"
              startIcon={<EmojiEventsOutlinedIcon />}
            >
              Best Choice
            </Button>
          </div>
          <div className="flex mr-[20%]">
            <div className="m-4 mt-[7%] mr-[7%] ">
              <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" />
              <div className="pl-[30%]">builder</div>
            </div>
            <div className="">
              <Typography fontWeight="bold">
                WixPro 72-Inch Responsive Website Builder-
              </Typography>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
              <br />
              <Typography fontWeight="bold" className="pl-2">Main Highlights</Typography>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
              <br />
              <Link underline="none">
                Show more <ExpandMoreOutlinedIcon />
              </Link>
            </div>
            <div className="flex-column w-[40%]">
              <div className="flex-column p-4 pl-[17%] w-[140px] bg-[#F3F9FF] ml-[20%] rounded-md   mt-[7%] mb-[20%] items-center flex-wrap">
                <div className="ml-3">
                  <Typography variant="h4" color="darkcyan">
                    9.8
                  </Typography>
                </div>
                <div>
                  <Typography variant="h7" color="darkcyan">
                    Exceptional
                  </Typography>
                </div>

                <div>
                  <Rating value={5} size="small" />
                </div>
              </div>
              <div className="">
                <button
                  variant="contained"
                  className="w-full rounded-lg bg-[#1B88F4] m-2 mr-6 p-2 text-white"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-column ml-[16%] m-7">
          <div className="">
            <Button
              variant="contained"
              color="warning"
              startIcon={<EmojiEventsOutlinedIcon />}
            >
              Best Value
            </Button>
          </div>
          <div className="flex mr-[20%]">
            <div className="m-4 mt-[7%] mr-[7%] ">
              <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" />
              <div className="pl-[30%]">builder</div>
            </div>
            <div className="">
              <Typography fontWeight="bold">
                WixPro 72-Inch Responsive Website Builder-
              </Typography>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
              <br />
              <Typography fontWeight="bold">Main Highlights</Typography>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
              <br />
              <Link underline="none">
                Show more <ExpandMoreOutlinedIcon />
              </Link>
            </div>
            <div className="flex-column w-[40%]">
              <div className="flex-column p-4 pl-[17%] w-[140px] bg-[#F3F9FF] ml-[20%] rounded-md   mt-[7%] mb-[20%] items-center flex-wrap">
                <div className="ml-3">
                  <Typography variant="h4" color="darkcyan">
                    9.5
                  </Typography>
                </div>
                <div>
                  <Typography variant="h7" color="darkcyan">
                    Exceptional
                  </Typography>
                </div>

                <div>
                  <Rating value={4.5} size="small" />
                </div>
              </div>
              <div className="">
                <button
                  variant="contained"
                  className="w-full rounded-lg bg-[#1B88F4] m-2 mr-6 p-2 text-white"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-column ml-[16%] m-7">
          <div className="">3</div>
          <div className="flex mr-[20%]">
            <div className="m-4 mt-[7%] mr-[7%] ">
              <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" />
              <div className="pl-[30%]">builder</div>
            </div>
            <div className="">
              <Typography fontWeight="bold">
                WixPro 72-Inch Responsive Website Builder-
              </Typography>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
              <br />
              <Typography fontWeight="bold">Main Highlights</Typography>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
              <br />
              <Link underline="none">
                Show more <ExpandMoreOutlinedIcon />
              </Link>
            </div>
            <div className="flex-column w-[40%]">
              <div className="flex-column p-4 pl-[17%] w-[140px] bg-[#F3F9FF] ml-[20%] rounded-md   mt-[7%] mb-[20%] items-center flex-wrap">
                <div className="ml-3">
                  <Typography variant="h4" color="darkcyan">
                    9.3
                  </Typography>
                </div>
                <div>
                  <Typography variant="h7" color="darkcyan">
                    Exceptional
                  </Typography>
                </div>

                <div>
                  <Rating value={5} size="small" />
                </div>
              </div>
              <div className="">
                <button
                  variant="contained"
                  className="w-full rounded-lg bg-[#1B88F4] m-2 mr-6 p-2 text-white"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-column ml-[16%] m-7">
          <div className="">4</div>
          <div className="flex mr-[20%]">
            <div className="m-4 mt-[7%] mr-[7%] ">
              <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" />
              <div className="pl-[30%]">builder</div>
            </div>
            <div className="">
              <Typography fontWeight="bold">
                WixPro 72-Inch Responsive Website Builder-
              </Typography>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
              <br />
              <Typography fontWeight="bold">Main Highlights</Typography>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
              <br />
              <Link underline="none" >
                Show more <ExpandMoreOutlinedIcon />
              </Link>
            </div>
            <div className="flex-column w-[40%]">
              <div className="flex-column p-4 pl-[17%] w-[140px] bg-[#F3F9FF] ml-[20%] rounded-md   mt-[7%] mb-[20%] items-center flex-wrap">
                <div className="ml-3">
                  <Typography variant="h4" color="darkcyan">
                    9.1
                  </Typography>
                </div>
                <div>
                  <Typography variant="h7" color="darkcyan">
                    Exceptional
                  </Typography>
                </div>

                <div>
                  <Rating value={5} size="small" />
                </div>
              </div>
              <div className="">
                <button
                  variant="contained"
                  className="w-full rounded-lg bg-[#1B88F4] m-2 mr-6 p-2 text-white"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[20%]">
          <Typography variant="h4">Related deals you might like for</Typography>
        </div>
        <div className="flex pl-[20%] pr-[10%] gap-[5%] mt-[5%] flex-wrap">
          <div className="flex-column">
            <div className="m-2">
              <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" />
            </div>
            <div className="flex gap-2 mt-[10%] m-2">
              <div className="bg-[#F2F4F7] rounded-md text-sm">20% Off</div>
              <div className="bg-[#F2F4F7] rounded-md text-sm">
                Limited time
              </div>
            </div>
            <div className="ml-[10%] text-gray-600 font-bold">WebBuilder 1</div>
            <div className="text-gray-400">
              Computer Modern clasic with wix support
            </div>
            <div className="flex gap-3">
              <div className="text-gray-500">$39.96</div>
              <div className="text-gray-400 text-sm">$49.96</div>
              <div className="text-red-500 text-sm">(20% Off)</div>
            </div>
            <div className="">
              <button
                variant="contained"
                className="w-full rounded-lg bg-[#1B88F4] m-2 mr-6 p-2 text-white"
              >
                View
              </button>
            </div>
          </div>
          <div className="flex-column">
            <div className="m-2">
              <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" />
            </div>
            <div className="flex gap-2 mt-[10%] m-2">
              <div className="bg-[#F2F4F7] rounded-md text-sm">20% Off</div>
              <div className="bg-[#F2F4F7] rounded-md text-sm">
                Limited time
              </div>
            </div>
            <div className="ml-[10%] text-gray-600 font-bold">WebBuilder 1</div>
            <div className="text-gray-400">
              Computer Modern clasic with wix support
            </div>
            <div className="flex gap-3">
              <div className="text-gray-500">$39.96</div>
              <div className="text-gray-400 text-sm">$49.96</div>
              <div className="text-red-500 text-sm">(20% Off)</div>
            </div>
            <div className="">
              <button
                variant="contained"
                className="w-full rounded-lg bg-[#1B88F4] m-2 mr-6 p-2 text-white"
              >
                View
              </button>
            </div>
          </div>
          <div className="flex-column">
            <div className="m-2">
              <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" />
            </div>
            <div className="flex gap-2 mt-[10%] m-2">
              <div className="bg-[#F2F4F7] rounded-md text-sm">20% Off</div>
              <div className="bg-[#F2F4F7] rounded-md text-sm">
                Limited time
              </div>
            </div>
            <div className="ml-[10%] text-gray-600 font-bold">WebBuilder 1</div>
            <div className="text-gray-400">
              Computer Modern clasic with wix support
            </div>
            <div className="flex gap-3">
              <div className="text-gray-500">$39.96</div>
              <div className="text-gray-400 text-sm">$49.96</div>
              <div className="text-red-500 text-sm">(20% Off)</div>
            </div>
            <div className="">
              <button
                variant="contained"
                className="w-full rounded-lg bg-[#1B88F4] m-2 mr-6 p-2 text-white"
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className="flex m-[5%] ml-[20%] gap-[2%]">
          <div>
            <Typography variant="h4">
              Sign up and get exclusive specials deals
            </Typography>
          </div>
          <div className="w-[32%]"></div>
          <button className="bg-[#1B88F4] rounded-tr-lg rounded-br-lg p-3 text-white">
            Sign up
          </button>
        </div>
        <div className="flex bg-[#212731] justify-center h-[300px] pt-[5%] gap-[10%]">
          <div className="flex-column ">
            <div className="text-white">CATEGORIES</div>
            <div className="text-white text-sm m-2">Web Builder</div>
            <div className="text-white text-sm m-2">Hosting</div>
            <div className="text-white text-sm m-2">Data Center</div>
            <div className="text-white text-sm m-2">Robotic Automation</div>
          </div>
          <div className="flex-column">
            <div className="text-white m-2">CONTACT</div>
            <div className="text-white text-sm m-2">Contact</div>
            <div className="text-white text-sm m-2">Privacy Policy</div>
            <div className="text-white text-sm m-2">Terms of Services</div>
            <div className="text-white text-sm m-2">About</div>
          </div>
          <div className="flex-column text-white justify-center mt-[4%]">
            United States
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
