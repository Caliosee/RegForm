
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
   <meta charSet="UTF-8" />
  <title> Registration Form </title>
  <link rel="stylesheet" href="style.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="container">
    <div className="title">Registration</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" name="Enter your name" required="" />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" email="Enter your email" required="" />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" number="Enter your number" required="" />
          </div>
          <div className="input-box">
            <span className="details">Address</span>
            <input type="text" address="Enter your address" required="" />
          </div>
          <div className="input-box">
            <span className="details">Why do you want to study here?</span>
            <input type="text" reason="Enter your reason" required="" />
          </div>
        </div>
        <div className="choices-details">
          <input type="radio" name="choices" id="dot-1" />
          <input type="radio" name="choices" id="dot-2" />
          <input type="radio" name="choices" id="dot-3" />
          <span className="choices-title">Are you old student here?</span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one" />
              <span className="choices">Yes</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two" />
              <span className="choices">No</span>
            </label>
            <label htmlFor="dot-3">
              <span className="dot three" />
              <span className="choices">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Register" />
        </div>
      </form>
    </div>
  </div>

    </div>
  )
}
