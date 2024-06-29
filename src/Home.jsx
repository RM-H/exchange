import Navbar from './Navbar.jsx'
import {KeyboardArrowDown, KeyboardArrowUp, AttachMoney} from '@mui/icons-material'

const Home = () => {
    return (
        <>
            <section className='bggrad1'>
                <Navbar/>


                <div className='columns is-multiline paddingx  ' style={{height: '80dvh'}}>

                    <div className="column is-6"
                         style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <p className='clrfourtext is-size-3 has-text-weight-bold'>
                            راهی برای ساختن آینده


                        </p>

                        <h1 className='clrfive is-size-3 has-text-weight-bold'>
                            خریـد و فـروش سریع ارز در نیکان
                        </h1>


                        <article className='is-size-5 mt-3 ' style={{textAlign: 'justify'}}>


                            به صرافی آنلاین ما خوش آمدید! با ارائه بهترین نرخ‌ها و سریع‌ترین خدمات، ما به شما امکان
                            تبادل
                            انواع ارزها را با امنیت کامل و سهولت بی‌نظیر می‌دهیم. تیم ما از کارشناسان حرفه‌ای و
                            فناوری‌های
                            پیشرفته استفاده می‌کند تا تجربه‌ای بدون دغدغه و مطمئن برای شما فراهم آورد. از نرخ‌های
                            لحظه‌ای
                            بهره‌مند شوید، تراکنش‌های خود را به راحتی مدیریت کنید و با اطمینان کامل به خرید و فروش ارز
                            بپردازید. هم‌اکنون ثبت‌نام کنید و از تخفیف‌های ویژه برای اولین تراکنش خود بهره‌مند شوید!
                        </article>


                    </div>


                    <div className="column is-6 is-flex is-align-items-flex-end" style={{
                        backgroundImage: 'url(/asset/image/1.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain'
                    }}>
                        <div className='columns is-multiline ' style={{width: '100%'}}>

                            <div className="column ">
                                <div className='card borderrad1'>

                                </div>
                            </div>


                            <div
                                className="column is-1 p-0 is-flex is-flex-direction-column is-align-items-center  is-justify-content-center">
                                <img src="/asset/image/button.png"
                                     style={{width: '10rem', maxWidth: 'none', zIndex: 5}}/>
                            </div>


                            <div className="column ">
                                <div className='card borderrad1'>


                                </div>

                            </div>


                        </div>


                    </div>


                </div>
            </section>

            <section>
                <div className='columns py-0 clrone paddingx is-flex is-align-items-center'
                     style={{minHeight: '6hrem'}}>
                    <div className='column is-2'>
                        <p className='is-size-5'>
                            قیمت روز ارزها
                        </p>

                    </div>

                    <div className='column is-1 is-flex is-flex-direction-column borderxwhite is-align-items-center'>
                        <KeyboardArrowUp/>
                        <KeyboardArrowDown/>


                    </div>


                    <div className='column is-6 is-flex is-justify-content-space-evenly is-align-items-center'>
                        <div className='is-flex is-align-items-center'>
                                 <span className='borderrad2 clrsix py-auto'>
                                        <AttachMoney sx={{mx: 'auto'}}/>
                                    </span>

                            <span className='mx-5 is-size-5 '>
                            دلار
                        </span>

                        </div>

                        <span className='is-size-5'>
                            647,000 تومان
                        </span>


                        <span className=' is-size-5'>
                           5.7%
                        </span>


                    </div>


                    <div className='column is-1'>
                        <img src="/asset/image/graph.png" alt=""/>

                    </div>


                    <div className='column is-2 has-text-left'>
                        <button className="button clrfour borderrad1 is-size-5">
                            خرید
                        </button>
                    </div>

                </div>


            </section>


            <section className='clrseven py-6'>

                <div className='columns  is-multiline paddingx pt-6'>

                    <div className='column is-12 mb-6'>


                        <p className='has-text-centered is-size-3 has-text-weight-bold clrfourtext'>
                            مزایـــای نیکان

                        </p>
                        <p className='has-text-centered is-size-3 has-text-weight-bold clrfive'>

                            در معاملات ارزی بـرای شمـــا
                        </p>

                    </div>


                    <div className='column is-4 p-4  '>

                        <div className='aboutcard clrsix'>
                            <img src="/asset/image/Rectangle.png" alt=""/>
                            <p className='has-text-weight-bold is-size-4' style={{marginTop: '-3rem'}}>
                                بالاترین امنیت برداشت
                            </p>
                            <p className='clreighttext mt-4 '>
                                قفل برداشت ارز و تائید انتقال با تماس
                            </p>
                        </div>


                    </div>

                    <div className='column is-4 p-4  '>
                        <div className='aboutcard clrsix'>
                            <img src="/asset/image/goldnumber_086%201.png" alt=""/>
                            <p className='has-text-weight-bold is-size-4' style={{marginTop: '-3rem'}}>
                                کارمزد نگهداری ارز
                            </p>
                            <p className='clreighttext mt-4 '>
                                کارمزد صفر نگهداری ارز در کیف پول نیکان
                            </p>
                        </div>


                    </div>

                    <div className='column is-4 p-4 '>

                        <div className='aboutcard clrsix'>
                            <img src="/asset/image/Design.png" alt=""/>
                            <p className='has-text-weight-bold is-size-4' style={{marginTop: '-3rem'}}>
                                آلارم بازار جهانی
                            </p>
                            <p className='clreighttext mt-4 '>
                                با شروع بازارهای جهانی ترید کنید
                            </p>
                        </div>


                    </div>


                    <div className='column is-4'>
                        <img src="/asset/image/item.png" alt=""/>

                    </div>

                    <div className='column is-8 pt-4 mt-4 is-flex is-flex-direction-column is-justify-content-center is-align-items-start'>

                        <p className='clrfive is-size-3 has-text-weight-bold my-3'>
                            ارائه کیف پول اختصاصی برای هر شخص

                        </p>

                        <article className='is-size-5 my-3 ' style={{textAlign:'justify'}}>
                            در صرافی ما، هر شخص دارای یک کیف پول اختصاصی خواهد بود که به طور خاص برای ذخیره‌سازی و
                            مدیریت ارزها طراحی شده است. این کیف پول‌ها با بالاترین استانداردهای امنیتی ایجاد شده‌اند تا
                            اطمینان حاصل شود که دارایی‌های شما در امنیت کامل نگهداری می‌شوند. با استفاده از کیف پول
                            اختصاصی، شما قادر خواهید بود به راحتی تراکنش‌های خود را پیگیری کنید، موجودی خود را بررسی
                            نمایید و از امکانات پیشرفته‌تری برای مدیریت دارایی‌های خود بهره‌مند شوید. تجربه‌ای امن، ساده
                            و کارآمد در انتظار شماست. همین امروز به صرافی ما بپیوندید و از مزایای کیف پول اختصاصی
                            بهره‌مند شوید.
                        </article>

                        <button className='button clrone borderrad1 is-size-5 my-3'>
                            افتتاح حساب در نیکان

                        </button>

                    </div>


                </div>


            </section>



            <section className='clrseven py-6'>
                <div className=' paddingx ' >
                    <div className='columns is-align-items-center clrnine ' style={{minHeight:'6rem' , borderRadius:'0.6rem'}}>


                        <div className="column is-3">
                            <p className='clrfive is-size-4 has-text-weight-bold'>
                                مراحـــل افتتــاح حســاب
                            </p>

                        </div>



                        <div className="column is-3">
                            <span className='clrseven is-size-5 p-2 has-text-weight-bold borderrad1' style={{color:'red'}}>
                                1
                            </span>
                            <span className='mx-1 is-size-5'>
                                ایجاد حساب کاربری

                            </span>

                        </div>
                        <div className="column is-3">

                               <span className='clrseven is-size-5 p-2 has-text-weight-bold borderrad1'
                                     style={{color: 'red'}}>
                                2
                            </span>
                            <span className='mx-1 is-size-5'>
                               احراز هویت

                            </span>
                        </div>
                        <div className="column is-3">
                               <span className='clrseven is-size-5 p-2 has-text-weight-bold borderrad1'
                                     style={{color: 'red'}}>
                                3
                            </span>
                            <span className='mx-1 is-size-5'>
                               شارژ کردن حساب کیف پول

                            </span>
                        </div>


                    </div>


                </div>

            </section>


        </>
    )
}
export default Home;