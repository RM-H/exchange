import Navbar from './Navbar.jsx'

const Home = () => {
    return (
        <>

            <Navbar/>


            <div className='columns is-multiline paddingx mt-4' style={{height: '80dvh'}}>

                <div className="column is-6"
                     style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <p className='clrfour is-size-3 has-text-weight-bold'>
                        راهی برای ساختن آینده


                    </p>

                    <h1 className='clrfive is-size-3 has-text-weight-bold'>
                        خریـد و فـروش سریع ارز در نیکان
                    </h1>


                    <article className='is-size-5 mt-3 ' style={{textAlign: 'justify'}}>


                        به صرافی آنلاین ما خوش آمدید! با ارائه بهترین نرخ‌ها و سریع‌ترین خدمات، ما به شما امکان تبادل
                        انواع ارزها را با امنیت کامل و سهولت بی‌نظیر می‌دهیم. تیم ما از کارشناسان حرفه‌ای و فناوری‌های
                        پیشرفته استفاده می‌کند تا تجربه‌ای بدون دغدغه و مطمئن برای شما فراهم آورد. از نرخ‌های لحظه‌ای
                        بهره‌مند شوید، تراکنش‌های خود را به راحتی مدیریت کنید و با اطمینان کامل به خرید و فروش ارز
                        بپردازید. هم‌اکنون ثبت‌نام کنید و از تخفیف‌های ویژه برای اولین تراکنش خود بهره‌مند شوید!
                    </article>


                </div>


                <div className="column is-6 is-flex is-align-items-flex-end" style={{
                    backgroundImage: 'url(/asset/image/1.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain'
                }}>
                    <div className='columns is-multiline ' style={{width:'100%'}}>

                        <div className="column ">
                            <div className='card borderrad1'>

                            </div>
                        </div>


                        <div className="column is-1 p-0 is-flex is-flex-direction-column is-align-items-center  is-justify-content-center">
                            <img src="/asset/image/button.png" style={{width:'10rem'  , maxWidth:'none' , zIndex:5 }}/>
                        </div>


                        <div className="column ">
                            <div className='card borderrad1'>

                            </div>

                        </div>


                    </div>


                </div>


            </div>


        </>
    )
}
export default Home;