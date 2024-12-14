import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "./From.css"

function From() {
  return (
    <>
      {/* Main Section */}
      <h1 className="heding">
        𝗩𝗶𝘀𝗶𝘁𝗼𝗿 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗦𝘆𝘀𝘁𝗲𝗺
      </h1>

      <main className="main-container">
        <div className="animation-container">
          <DotLottieReact
            className="ani"
            src="https://lottie.host/3978bdf5-8557-46d2-8f7f-6c8f47518bd0/ZztFz4gs0b.lottie"
            loop
            autoplay
          />
        </div>
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label htmlFor="studentName">𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐍𝐚𝐦𝐞:</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fatherName">𝐏𝐚𝐫𝐞𝐧𝐭𝐬 𝐍𝐚𝐦𝐞:</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNo">𝐒𝐭𝐮𝐝𝐚𝐧𝐭 𝐦𝐨𝐛𝐢𝐥𝐞𝐍𝐎:</label>
              <input
                type="tel"
                id="mobileNo"
                name="mobileNo"
                className="input-field"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNo">𝐏𝐚𝐫𝐞𝐧𝐭𝐬 𝐦𝐨𝐛𝐢𝐥𝐞𝐍𝐎:</label>
              <input
                type="tel"
                id="mobileNo"
                name="mobileNo"
                className="input-field"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">𝐀𝐝𝐝𝐫𝐞𝐬𝐬:</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                className="textarea-field"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="course">𝗜𝗻𝘁𝗿𝗲𝘀𝘁𝗲𝗱 𝐂𝐨𝐮𝐫𝐬𝐞:</label>
              <select id="course" name="course" className="select-field" required>
                <option value="">--Select a Course--</option>
                <option value="webDev">BBA</option>
                <option value="appDev">Fire and Safty</option>
                <option value="dataScience">Nurshing</option>
                <option value="graphicDesign">Engenearing</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="reference">𝐑𝐞𝐟𝐞𝐫𝐞𝐧𝐜𝐞 𝐁𝐲:-</label>
              <input
                type="text"
                id="reference"
                name="reference"
                className="input-field"
              />
            </div>
            <div className="form-group form-group-btn">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default From