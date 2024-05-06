"use client";
import React, { useEffect } from "react";
import "../homeComponents/AboutUs.css";

import { Button, Checkbox, Form, Input } from "antd";
import Select from "react-select";
import GsapScrollAnimationComp from "../components/gsapComp/GsapScrollAnimationComp";

const AboutUs = ({ titleWidth, autoMx }) => {
  useEffect(() => {
    const body = document.body;

    body.style.overflow = "hidden";
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const countries = [
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    { value: "andorra", label: "Andorra" },
    { value: "angola", label: "Angola" },
    { value: "antigua_and_barbuda", label: "Antigua and Barbuda" },
    { value: "argentina", label: "Argentina" },
    { value: "armenia", label: "Armenia" },
    { value: "australia", label: "Australia" },
    { value: "austria", label: "Austria" },
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "bahamas", label: "Bahamas" },
    { value: "bahrain", label: "Bahrain" },
    { value: "bangladesh", label: "Bangladesh" },
    { value: "barbados", label: "Barbados" },
    { value: "belarus", label: "Belarus" },
    { value: "belgium", label: "Belgium" },
    { value: "belize", label: "Belize" },
    { value: "benin", label: "Benin" },
    { value: "bhutan", label: "Bhutan" },
    { value: "bolivia", label: "Bolivia" },
    { value: "bosnia_and_herzegovina", label: "Bosnia and Herzegovina" },
    { value: "botswana", label: "Botswana" },
    { value: "brazil", label: "Brazil" },
    { value: "brunei", label: "Brunei" },
    { value: "bulgaria", label: "Bulgaria" },
    { value: "burkina_faso", label: "Burkina Faso" },
    { value: "burundi", label: "Burundi" },
    { value: "cabo_verde", label: "Cabo Verde" },
    { value: "cambodia", label: "Cambodia" },
    { value: "cameroon", label: "Cameroon" },
    { value: "canada", label: "Canada" },
    { value: "central_african_republic", label: "Central African Republic" },
    { value: "chad", label: "Chad" },
    { value: "chile", label: "Chile" },
    { value: "china", label: "China" },
    { value: "colombia", label: "Colombia" },
    { value: "comoros", label: "Comoros" },
    { value: "congo", label: "Congo" },
    { value: "costa_rica", label: "Costa Rica" },
    { value: "cote_divoire", label: "Côte d'Ivoire" },
    { value: "croatia", label: "Croatia" },
    { value: "cuba", label: "Cuba" },
    { value: "cyprus", label: "Cyprus" },
    { value: "czechia", label: "Czechia" },
    { value: "denmark", label: "Denmark" },
    { value: "djibouti", label: "Djibouti" },
    { value: "dominica", label: "Dominica" },
    { value: "dominican_republic", label: "Dominican Republic" },
    { value: "east_timor", label: "East Timor" },
    { value: "ecuador", label: "Ecuador" },
    { value: "egypt", label: "Egypt" },
    { value: "el_salvador", label: "El Salvador" },
    { value: "equatorial_guinea", label: "Equatorial Guinea" },
    { value: "eritrea", label: "Eritrea" },
    { value: "estonia", label: "Estonia" },
    { value: "eswatini", label: "Eswatini" },
    { value: "ethiopia", label: "Ethiopia" },
    { value: "fiji", label: "Fiji" },
    { value: "finland", label: "Finland" },
    { value: "france", label: "France" },
    { value: "gabon", label: "Gabon" },
    { value: "gambia", label: "Gambia" },
    { value: "georgia", label: "Georgia" },
    { value: "germany", label: "Germany" },
    { value: "ghana", label: "Ghana" },
    { value: "greece", label: "Greece" },
    { value: "grenada", label: "Grenada" },
    { value: "guatemala", label: "Guatemala" },
    { value: "guinea", label: "Guinea" },
    { value: "guinea_bissau", label: "Guinea-Bissau" },
    { value: "guyana", label: "Guyana" },
    { value: "haiti", label: "Haiti" },
    { value: "honduras", label: "Honduras" },
    { value: "hungary", label: "Hungary" },
    { value: "iceland", label: "Iceland" },
    { value: "india", label: "India" },
    { value: "indonesia", label: "Indonesia" },
    { value: "iran", label: "Iran" },
    { value: "iraq", label: "Iraq" },
    { value: "ireland", label: "Ireland" },
    { value: "israel", label: "Israel" },
    { value: "italy", label: "Italy" },
    { value: "jamaica", label: "Jamaica" },
    { value: "japan", label: "Japan" },
    { value: "jordan", label: "Jordan" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "kenya", label: "Kenya" },
    { value: "kiribati", label: "Kiribati" },
    { value: "korea_north", label: "Korea, North" },
    { value: "korea_south", label: "Korea, South" },
    { value: "kosovo", label: "Kosovo" },
    { value: "kuwait", label: "Kuwait" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "laos", label: "Laos" },
    { value: "latvia", label: "Latvia" },
    { value: "lebanon", label: "Lebanon" },
    { value: "lesotho", label: "Lesotho" },
    { value: "liberia", label: "Liberia" },
    { value: "libya", label: "Libya" },
    { value: "liechtenstein", label: "Liechtenstein" },
    { value: "lithuania", label: "Lithuania" },
    { value: "luxembourg", label: "Luxembourg" },
    { value: "madagascar", label: "Madagascar" },
    { value: "malawi", label: "Malawi" },
    { value: "malaysia", label: "Malaysia" },
    { value: "maldives", label: "Maldives" },
    { value: "mali", label: "Mali" },
    { value: "malta", label: "Malta" },
    { value: "marshall_islands", label: "Marshall Islands" },
    { value: "mauritania", label: "Mauritania" },
    { value: "mauritius", label: "Mauritius" },
    { value: "mexico", label: "Mexico" },
    { value: "micronesia", label: "Micronesia" },
    { value: "moldova", label: "Moldova" },
    { value: "monaco", label: "Monaco" },
    { value: "mongolia", label: "Mongolia" },
    { value: "montenegro", label: "Montenegro" },
    { value: "morocco", label: "Morocco" },
    { value: "mozambique", label: "Mozambique" },
    { value: "myanmar", label: "Myanmar" },
    { value: "namibia", label: "Namibia" },
    { value: "nauru", label: "Nauru" },
    { value: "nepal", label: "Nepal" },
    { value: "netherlands", label: "Netherlands" },
    { value: "new_zealand", label: "New Zealand" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "nigeria", label: "Nigeria" },
    { value: "north_macedonia", label: "North Macedonia" },
    { value: "norway", label: "Norway" },
    { value: "oman", label: "Oman" },
    { value: "pakistan", label: "Pakistan" },
    { value: "palau", label: "Palau" },
    { value: "panama", label: "Panama" },
    { value: "papua_new_guinea", label: "Papua New Guinea" },
    { value: "paraguay", label: "Paraguay" },
    { value: "peru", label: "Peru" },
    { value: "philippines", label: "Philippines" },
    { value: "poland", label: "Poland" },
    { value: "portugal", label: "Portugal" },
    { value: "qatar", label: "Qatar" },
    { value: "romania", label: "Romania" },
    { value: "russia", label: "Russia" },
    { value: "rwanda", label: "Rwanda" },
    { value: "saint_kitts_and_nevis", label: "Saint Kitts and Nevis" },
    { value: "saint_lucia", label: "Saint Lucia" },
    {
      value: "saint_vincent_and_the_grenadines",
      label: "Saint Vincent and the Grenadines",
    },
    { value: "samoa", label: "Samoa" },
    { value: "san_marino", label: "San Marino" },
    { value: "sao_tome_and_principe", label: "Sao Tome and Principe" },
    { value: "saudi_arabia", label: "Saudi Arabia" },
    { value: "senegal", label: "Senegal" },
    { value: "serbia", label: "Serbia" },
    { value: "seychelles", label: "Seychelles" },
    { value: "sierra_leone", label: "Sierra Leone" },
    { value: "singapore", label: "Singapore" },
    { value: "slovakia", label: "Slovakia" },
    { value: "slovenia", label: "Slovenia" },
    { value: "solomon_islands", label: "Solomon Islands" },
    { value: "somalia", label: "Somalia" },
    { value: "south_africa", label: "South Africa" },
    { value: "south_sudan", label: "South Sudan" },
    { value: "spain", label: "Spain" },
    { value: "sri_lanka", label: "Sri Lanka" },
    { value: "sudan", label: "Sudan" },
    { value: "suriname", label: "Suriname" },
    { value: "sweden", label: "Sweden" },
    { value: "switzerland", label: "Switzerland" },
    { value: "syria", label: "Syria" },
    { value: "taiwan", label: "Taiwan" },
    { value: "tajikistan", label: "Tajikistan" },
    { value: "tanzania", label: "Tanzania" },
    { value: "thailand", label: "Thailand" },
    { value: "togo", label: "Togo" },
    { value: "tonga", label: "Tonga" },
    { value: "trinidad_and_tobago", label: "Trinidad and Tobago" },
    { value: "tunisia", label: "Tunisia" },
    { value: "turkey", label: "Turkey" },
    { value: "turkmenistan", label: "Turkmenistan" },
    { value: "tuvalu", label: "Tuvalu" },
    { value: "uganda", label: "Uganda" },
    { value: "ukraine", label: "Ukraine" },
    { value: "united_arab_emirates", label: "United Arab Emirates" },
    { value: "united_kingdom", label: "United Kingdom" },
    { value: "united_states", label: "United States" },
    { value: "uruguay", label: "Uruguay" },
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "vanuatu", label: "Vanuatu" },
    { value: "vatican_city", label: "Vatican City" },
    { value: "venezuela", label: "Venezuela" },
    { value: "vietnam", label: "Vietnam" },
    { value: "yemen", label: "Yemen" },
    { value: "zambia", label: "Zambia" },
    { value: "zimbabwe", label: "Zimbabwe" },
  ];

  const animationRefs = GsapScrollAnimationComp();

  return (
    <div>
      <div
        id="contactUsHomeScrollRef"
        className="pb-10"
      >
        <div className="text-black">
          <div
            className={`text-xl sm:text-6xl lg:text-5xl text-center w-[100%] pillat-normal opacity-0 transform translate-y-[50px] ${titleWidth} ${autoMx}`}
            ref={animationRefs.firstFadeInAnimation}
          >
            <h2>connect with us today to transform your business</h2>
          </div>
          <div
            className="text-center text-gray-600 sm:mt-12 mt-4 sm:text-lg lg:text-2xl lg:flex justify-center items-center gap-10 lg:gap-[12vw] pillat-normal opacity-0 transform translate-y-[50px]"
            ref={animationRefs.secondFadeInAnimation}
          >
            <div>
              <h3>+92 21 3517 1991</h3>
              <p className="text-sm">phone</p>
            </div>
            <div className="">
              <h3>info@symmetrygroup.biz</h3>
              <p className="text-sm">email</p>
            </div>
          </div>
        </div>

        <div
          className="text-black my-10 mx-5 flex flex-col lg:flex-row lg:justify-center gap-5 lg:mt-16 lg:gap-[7vw] pillat-normal opacity-0 transform translate-y-[50px]"
          ref={animationRefs.thirdFadeInAnimation}
        >
          <div className="flex flex-col gap-5 lg:w-[20%] ">
            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>first name</h2>
              </div>
              <div className=" mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your first name"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[450px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>
            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>last name</h2>
              </div>
              <div className=" mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your last name"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[450px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>
            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>email</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your email"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[450px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>

         

            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>message</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: false,
                        message: "Please enter your message",
                      },
                    ]}
                  >
                    <Input
                      placeholder="type your message"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[650px] 2xl:w-[800px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:w-[20%]">
            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>company</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your company name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your company name"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[450px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>

            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>country</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="country"
                    rules={[
                      {
                        required: false,
                        message: "Please choose the country",
                      },
                    ]}
                  >
                    <Select
                      options={countries}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[450px] -ml-[10px] "
                      placeholder="select your country"
                      isSearchable={true} // Enable searching
                      isClearable={true} // Enable clearing the selection
                      styles={{
                        option: (provided, state) => ({
                          ...provided,
                          backgroundColor:
                            state.isFocused || state.isSelected
                              ? "black"
                              : "white",
                          ":active": {},
                          color:
                            state.isFocused || state.isSelected
                              ? "white"
                              : "black",
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          backgroundColor: "transparent",
                        }),
                      }}
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>

            <div className=" border-gray-300 px-3 pb-1">
              <div>
                <h2>mobile</h2>
              </div>
              <div className="mt-3">
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your mobile number",
                      },
                    ]}
                  >
                    <Input
                      placeholder="enter your mobile number"
                      style={{
                        borderRadius: "0px",
                        borderRight: "0px",
                        borderTop: "0px",
                        borderLeft: "0px",
                        // width: "260px",
                        marginLeft: "-11px",
                      }}
                      className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[450px]"
                    />
                  </Form.Item>

                  {/* <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item> */}
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 ">
          <div className="border border-gray-400 rounded-lg w-40 flex justify-center items-center pillat-normal cursor-pointer lets-discuss-btn">
            <button className="py-2">let's discuss</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
