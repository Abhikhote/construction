import React from 'react'
import '../component-css/aboutus.css'
export default function About() {
    return (
        <>
            <div className="container-fluid">
                <div>
                    <div>
                        <h1>About Us</h1>
                    </div>
                    <img src={require('../images/img3.jpg')} style={{ width: "100%" }} alt="" />

                </div>
                <div>
                    <div className="row" style={{ marginTop: 60, backgroundColor: "white" }}>
                        <div className="col-xl-5">
                            <img
                                style={{ width: 500, height: 550, marginLeft: 100, borderRadius: 30 }}
                                src={require('../images/AboutImg.jpeg')}
                                className="image shadow-lg p-1"
                                alt=""
                            />
                        </div>
                        <div className="col-xl-5 ms-5">
                            <div className='div-2-2'>
                                <h2>Welcome to Vedanand Constructions Ltd.</h2>
                                <br />
                                <p className='para-aboutus'>
                                    Vedanand Constructions Ltd is renowned in Nashik. The company was established in 2015 and has been a leading name in the industry.
                                    <br/>
                                    At Vedanand Constructions, we're not just in the business of construction; we're in the business of building dreams. With a commitment to excellence and a passion for innovation, we've been serving our clients with integrity and professionalism for 8 years.
                                    <br />
                                    <b>What Sets Us Apart :-</b>
                                    <br />
                                    Expert Team
                                    <br/>
                                    Innovation
                                    <br/>
                                    Client-Centric Approach
                                    <br />
                                    <br />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ backgroundColor: "#87CEFA", marginTop: 60 }}>
                    <div className="col-xl-3" >
                        <div
                            className="card"
                            style={{
                                width: "19rem",
                                marginTop: 60,
                                marginLeft: 100,
                                backgroundColor: "transparent",
                                border: "none"
                            }}
                        >
                            <div className='img-div'>
                                <img src={require('../icons/civil.png')} className='card-img-top-about' alt="..." />
                            </div>
                            <div className="card-body">

                                <h5 className="card-title" style={{ textAlign: "center" }}>
                                    EPC  Turnkey Execution (CIVIL  PEB)
                                </h5>
                                <p className="card-text-p">
                                    Vedanand Constructions provides EPC & turnkey solutions (CIVIL & PEB) to industrial and commercial projects with time bound execution
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div
                            className="card"
                            style={{
                                width: "19rem",
                                marginTop: 60,
                                marginLeft: 180,
                                backgroundColor: "transparent",
                                border: "none"
                            }}
                        >
                            <div className='img-div'>
                                <img src={require('../icons/mech.png')} className='card-img-top-about' alt="..." />
                            </div>
                            <div className=" card-body">
                                <h5 className="card-title" style={{ textAlign: "center" }}>
                                    Mechanical, Electrical  Plumbing (MEP)
                                </h5>
                                <p className="card-text-p">
                                    Vedanand Constructions offers Mechanical, Electrical & Pumbing (MEP) Services with end-to-end solution
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div
                            className="card"
                            style={{
                                width: "19rem",
                                marginTop: 60,
                                marginLeft: 250,
                                backgroundColor: "transparent",
                                border: "none"
                            }}
                        >
                            <div className='img-div'>
                                <img src={require('../icons/wind.png')} className='card-img-top-about' alt="..." />
                            </div>
                            <div className=" card-body">
                                <h5 className="card-title" style={{ textAlign: "center" }}>
                                    Heating, Ventilation  Air Conditioning (HVAC)
                                </h5>
                                <p className="card-text-p">
                                    Vedanand Constructions provides heating, Ventilation & Air Conditioning (HVAC) with end-to-end solution
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ backgroundColor: "#F8F9F9", height: 410 }}>
                    <div className="col-xl-3 ">
                        <div
                            className="card shadow-lg p-1"
                            style={{ width: 450, marginTop: 60, marginLeft: 145, height: 300 }}
                        >
                            <div className="card-body">
                                <h2 className="card-title-p" style={{ textAlign: "center" }}>
                                    Our Vision
                                </h2>
                                <p className="card-text-p">
                                    <br />
                                    Our vision is to be the premier construction company known for excellence in craftsmanship, innovation in project delivery, and commitment to sustainability. We aim to surpass client expectations by delivering high-quality, cost-effective projects on time and within budget.
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div
                            className="card shadow-lg p-1"
                            style={{ width: 450, marginTop: 60, marginLeft: 400, height: 300 }}
                        >
                            <div className=" card-body">
                                <h2 className="card-title-p" style={{ textAlign: "center" }}>
                                    Our Mission
                                </h2>
                                <p className="card-text-p">
                                    <br />
                                    At Vedanand Construction, our mission is to build with integrity, excellence, and innovation. We are dedicated to delivering superior construction services that exceed client expectations, while prioritizing safety, sustainability, and community engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ backgroundColor: "#1E90FF", marginTop: 60, marginBottom: 60 }}>
                    <div className="row"><h1 className='strength-div text-white fw-bold mt-3'>Our Strengths</h1></div>
                    <div className="col-xl-3">
                        <div
                            className="card"
                            style={{
                                width: 360,
                                marginTop: 60,
                                marginLeft: 80,
                                height: 200,
                                borderRadius: 7
                            }}
                        >
                            <div className=" card-body">
                                <h5 className="card-title" style={{ textAlign: "center" }}>
                                    Customer Service
                                </h5>
                                <br />
                                <p className="card-text">
                                    Excellent communication and responsiveness to client needs and concerns.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div
                            className="card"
                            style={{
                                width: 360,
                                marginTop: 60,
                                marginLeft: 155,
                                height: 200,
                                borderRadius: 7
                            }}
                        >
                            <div className=" card-body">
                                <h5 className="card-title" style={{ textAlign: "center" }}>
                                    {" "}
                                    PLANNED EXECUTION
                                </h5>
                                <br />
                                <p className="card-text">
                                    Projects executed by us are planned and tracked using professional tools and systems
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div
                            className="card"
                            style={{
                                width: 330,
                                marginTop: 60,
                                marginLeft: 230,
                                height: 200,
                                borderRadius: 7
                            }}
                        >
                            <div className=" card-body">
                                <h5 className="card-title" style={{ textAlign: "center" }}>
                                    TOTAL QUALITY MANAGEMENT
                                </h5>
                                <br />
                                <p className="card-text">
                                    Incorporating sustainable building practices, such as using environmentally friendly materials, reducing waste, and optimizing energy efficiency.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ paddingBottom: 60 }}>

                        <div className="col-xl-3">
                            <div
                                className="card"
                                style={{
                                    width: 360,
                                    marginTop: 60,
                                    marginLeft: 80,
                                    height: 200,
                                    borderRadius: 7
                                }}
                            >
                                <div className=" card-body">
                                    <h5 className="card-title" style={{ textAlign: "center" }}>
                                        ADOPT LATEST TECHNIQUES
                                    </h5>
                                    <br />
                                    <p className="card-text">
                                        Ability to adapt to changing regulations, technologies, and market trends.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div
                                className="card"
                                style={{
                                    width: 360,
                                    marginTop: 60,
                                    marginLeft: 155,
                                    height: 200,
                                    borderRadius: 7
                                }}
                            >
                                <div className=" card-body">
                                    <h5 className="card-title" style={{ textAlign: "center" }}>
                                        STRONG FINANCIALS
                                    </h5>
                                    <br />
                                    <p className="card-text">
                                        Sound financial footing to ensure project completion and avoid delays.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div
                                className="card"
                                style={{
                                    width: 330,
                                    marginTop: 60,
                                    marginLeft: 230,
                                    height: 200,
                                    borderRadius: 7
                                }}
                            >
                                <div className=" card-body">
                                    <h5 className="card-title" style={{ textAlign: "center" }}>
                                        SKILLED WORKFORCE
                                    </h5>
                                    <br />
                                    <p className="card-text">
                                        A talented and skilled workforce, including project managers, engineers, architects, and skilled laborers, is essential for successfully executing construction projects.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/*3rd row*/}
                {/* map start */}
                <div className="container-fluid  " style={{ padding: "10%" }}>
                    <div className="row">
                        <div className="col-6 ">
                            <h3>CORPORATE / HEAD OFFICE</h3>
                            <br />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-house"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                            </svg>{" "}
                            &nbsp; &nbsp; &nbsp; Udyog Bhavan - Umberkhed Rd,
                            Pimpalgaon Baswant, Nashik
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maharashtra
                            422209
                            <br />
                            <br />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-telephone"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>{" "}
                            &nbsp; &nbsp; &nbsp; 9876543310
                            <br />
                            <br />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-mailbox"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z" />
                                <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0" />
                            </svg>
                            &nbsp; &nbsp; &nbsp;
                            connect@vedanand.co.in
                        </div>
                        <div className="col-6 shadow-lg p-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.2641650875553!2d73.98481547500684!3d20.164723681277096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdddad69879376d%3A0xfd337526f386bc66!2sUdyog%20Bhavan%2C%20Pimpalgaon%20Baswant%2C%20Maharashtra%20422209!5e0!3m2!1sen!2sin!4v1708588158690!5m2!1sen!2sin"
                                width={600}
                                title='adf'
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>
                    </div>
                </div>
                {/* map end */}
            </div>

        </>
    )
}
