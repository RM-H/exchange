import {NightlightOutlined,Circle} from '@mui/icons-material'


const Navbar = () => {
  return (
      <>
          <nav className="navbar paddingx" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                  <a className="navbar-item yekan navboldtext " href="https://bulma.io">

                      Nikan


                  </a>

                  <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                     data-target="navbarBasicExample">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                  </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                  <div className="navbar-start">
                      <a className="navbar-item">
                          خرید ارز
                      </a>

                      <a className="navbar-item">
                          <Circle sx={{fontSize:'0.7rem'}} className='clrfour'/>
                          قیمت ارزهای جهانی
                      </a>


                      <div className="navbar-item has-dropdown is-hoverable">
                          <a className="navbar-link">
                              منوی کامل
                          </a>

                          <div className="navbar-dropdown">
                              <a className="navbar-item">
                                  About
                              </a>
                              <a className="navbar-item is-selected">
                                  Jobs
                              </a>
                              <a className="navbar-item">
                                  Contact
                              </a>
                              <hr className="navbar-divider"/>
                              <a className="navbar-item">
                                  Report an issue
                              </a>
                          </div>
                      </div>

                      <div className="navbar-item has-dropdown is-hoverable">
                          <a className="navbar-link">
                              پشتیبانی
                          </a>

                          <div className="navbar-dropdown">
                              <a className="navbar-item">
                                  About
                              </a>
                              <a className="navbar-item is-selected">
                                  Jobs
                              </a>
                              <a className="navbar-item">
                                  Contact
                              </a>
                              <hr className="navbar-divider"/>
                              <a className="navbar-item">
                                  Report an issue
                              </a>
                          </div>
                      </div>

                      <a className="navbar-item">
                          بلاگ
                      </a>
                  </div>

                  <div className="navbar-end">
                      <div className="navbar-item">
                          <div className="buttons">
                              <a className="navbar-item borderrad2 clrthree">
                                  <NightlightOutlined/>
                              </a>
                              <a className="clrtwo">

                                  ورود
                              </a>
                              <a className="button clrone borderrad1">
                                  ثبت نام
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>


      </>
  )
}
export default Navbar;