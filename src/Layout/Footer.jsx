import {
  instagramDesktopIcon,
  instagramIcon,
  telegramDesktopIcon,
  telegramIcon,
  twitterDesktopIcon,
  twitterIcon,
} from '../components/icons/FooterIcons';
import { toPersianNumbersWithComma } from '../utils/toPersianNumbersWithComma';

function Footer() {
  return (
    <footer className="footer-container">
      <img src="../../public/images/footer.jpg" alt="" />
      <div className="footer">
        <div className="footer__items">
          <h3>دسترسی آسان</h3>
          <ul>
            <li>پرسش های متداول</li>
            <li>قوانین ترخینه</li>
            <li>حریم خصوصی</li>
            <li className="footer__icons">
              <span className="footer__icons--mobile">{twitterIcon}</span>
              <span className="footer__icons--desktop">
                {twitterDesktopIcon}
              </span>
              <span className="footer__icons--mobile">{instagramIcon}</span>
              <span className="footer__icons--desktop">
                {instagramDesktopIcon}
              </span>
              <span className="footer__icons--mobile">{telegramIcon}</span>
              <span className="footer__icons--desktop">
                {telegramDesktopIcon}
              </span>
            </li>
          </ul>
        </div>
        <div className="footer__items">
          <h3>شعبه های ترخینه</h3>
          <ul>
            <li>شعبه اکباتان</li>
            <li>شعبه چالوس</li>
            <li>شعبه اقدسیه</li>
            <li>شعبه ونک</li>
          </ul>
        </div>
        <div className="footer__items contact-to-tarkhineh">
          <h3>پیام به ترخینه</h3>
          <div className="contact__item">
            <div className="contact__inputs">
              <input type="text" placeholder="نام و نام خانوادگی" />
              <input type="text" placeholder="شماره تماس" />
              <input type="text" placeholder="آدرس ایمیل " />
            </div>
            <div className="contact__textarea">
              <textarea type="text" placeholder="پیام شما" maxLength="200">
                {' '}
              </textarea>
              <p>
                {toPersianNumbersWithComma(0)}/{toPersianNumbersWithComma(200)}
              </p>
              <button className="btn contact--btn">ارسال پیام</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
