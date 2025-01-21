import updatebg from '../../assets/images/updateBackground.png'
const Update = () => {
  return (
    <>
    <div style={{background:`url(${updatebg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className="alamin-update w-full pt-[100px] sm:pt-[180px] md:pt-[301px]  pb-[176px]">
        <div className="container">
            <div className="update-text">
                <h1 className='text-[48px] font-Poppins font-semibold mb-[18px] w-full sm:w-[600px] text-white'>Get the latest news and
                updates</h1>
                <p className=' text-[18px] font-dm font-medium text-[#F1E6DA] '>Sign up for our newsletter</p>
            </div>
            <div className="update-input mt-[18px] flex">
                <input placeholder='Your email address' className=' w-[215px] sm:w-[496px] text-[16px] font-dm font-semibold outline-none h-[50px] pl-[25px] bg-[#F1E6DA] text-[#999999] rounded-l-[12px]' />
                <div className="button">
                    <button className='text-[16px] font-dm  px-[24px] rounded-r-[12px] py-[13px] bg-[#43d6f7] transition-all duration-[.4s] hover:bg-gradient-to-r to-[#64DBF5] from-[#ADE3EF] font-semibold text-[#003363]'>
                    Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Update