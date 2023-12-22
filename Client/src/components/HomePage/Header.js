import React from 'react';
import Subheader from './Subheader';

const Header = () => {
    return (
            <header>
                <div className="flex items-center justify-between bg-black pl-28 pr-28">
                    <div className="flex items-center justify-center">
                        <div className='p-3'>
                        <img src="https://yt3.googleusercontent.com/HnAnUZS7d8LFtPHaHRtPH9nMoUmrsBBy_FDD-T-YQIycPW55peuWo1NO_rxPIswDbukXYlk7=s176-c-k-c0x00ffffff-no-rj" className='h-[50px] rounded-full mr-5' alt="" /></div>
                        <h2 className='text-white w-[100px] text-center leading-fullheader hover:bg-[#F5F5F5] hover:text-black'>Men</h2>
                        <h2 className='text-white w-[100px] text-center leading-fullheader hover:bg-[#F5F5F5] hover:text-black'>Women</h2>
                    </div>
                    <div className=' flex items-center justify-center p-5 '>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-3'>
                            <path fillRule="evenodd" clip-rule="evenodd" d="M7.05405 15.1081C3.15821 15.1081 -1.49012e-08 11.9499 -1.49012e-08 8.05405C-1.49012e-08 4.15821 3.15821 1 7.05405 1C10.9499 1 14.1081 4.15821 14.1081 8.05405C14.1081 9.73914 13.5173 11.2862 12.5314 12.4994L17.7863 17.7543C18.0712 18.0392 18.0712 18.5013 17.7863 18.7863C17.5013 19.0712 17.0393 19.0712 16.7543 18.7863L11.4994 13.5314C10.2862 14.5173 8.73914 15.1081 7.05405 15.1081ZM7.05405 13.6486C10.1439 13.6486 12.6486 11.1439 12.6486 8.05405C12.6486 4.96424 10.1439 2.45946 7.05405 2.45946C3.96424 2.45946 1.45946 4.96424 1.45946 8.05405C1.45946 11.1439 3.96424 13.6486 7.05405 13.6486Z" fill="#BEBEBE" />
                            <path d="M12.5314 12.4994L12.3546 12.6762L12.1952 12.5168L12.3374 12.3418L12.5314 12.4994ZM17.7863 17.7543L17.6095 17.931L17.6095 17.931L17.7863 17.7543ZM17.7863 18.7863L17.963 18.963L17.963 18.963L17.7863 18.7863ZM16.7543 18.7863L16.5775 18.963L16.5775 18.963L16.7543 18.7863ZM11.4994 13.5314L11.3418 13.3374L11.5168 13.1952L11.6762 13.3546L11.4994 13.5314ZM0.25 8.05405C0.25 11.8118 3.29628 14.8581 7.05405 14.8581V15.3581C3.02014 15.3581 -0.25 12.088 -0.25 8.05405H0.25ZM7.05405 1.25C3.29628 1.25 0.25 4.29628 0.25 8.05405H-0.25C-0.25 4.02014 3.02014 0.75 7.05405 0.75V1.25ZM13.8581 8.05405C13.8581 4.29628 10.8118 1.25 7.05405 1.25V0.75C11.088 0.75 14.3581 4.02014 14.3581 8.05405H13.8581ZM12.3374 12.3418C13.2883 11.1715 13.8581 9.67965 13.8581 8.05405H14.3581C14.3581 9.79862 13.7462 11.4009 12.7254 12.6571L12.3374 12.3418ZM12.7082 12.3227L17.963 17.5775L17.6095 17.931L12.3546 12.6762L12.7082 12.3227ZM17.963 17.5775C18.3457 17.9601 18.3457 18.5804 17.963 18.963L17.6095 18.6095C17.7968 18.4221 17.7968 18.1184 17.6095 17.931L17.963 17.5775ZM17.963 18.963C17.5804 19.3457 16.9601 19.3457 16.5775 18.963L16.9311 18.6095C17.1184 18.7968 17.4221 18.7968 17.6095 18.6095L17.963 18.963ZM16.5775 18.963L11.3227 13.7082L11.6762 13.3546L16.9311 18.6095L16.5775 18.963ZM7.05405 14.8581C8.67965 14.8581 10.1715 14.2883 11.3418 13.3374L11.6571 13.7254C10.4009 14.7462 8.79862 15.3581 7.05405 15.3581V14.8581ZM12.8986 8.05405C12.8986 11.2819 10.2819 13.8986 7.05405 13.8986V13.3986C10.0058 13.3986 12.3986 11.0058 12.3986 8.05405H12.8986ZM7.05405 2.20946C10.2819 2.20946 12.8986 4.82617 12.8986 8.05405H12.3986C12.3986 5.10232 10.0058 2.70946 7.05405 2.70946V2.20946ZM1.20946 8.05405C1.20946 4.82617 3.82617 2.20946 7.05405 2.20946V2.70946C4.10232 2.70946 1.70946 5.10232 1.70946 8.05405H1.20946ZM7.05405 13.8986C3.82617 13.8986 1.20946 11.2819 1.20946 8.05405H1.70946C1.70946 11.0058 4.10232 13.3986 7.05405 13.3986V13.8986Z" fill="#BEBEBE" />
                        </svg>
                        <input type="text"
                            placeholder='What are you looking for?'
                            className='bg-transparent focus:outline-none text-white'
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className="cart p-3">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clip-rule="evenodd" d="M8.06324 1.5C6.82049 1.5 5.81324 2.505 5.81324 3.75H10.3132C10.3132 2.505 9.30599 1.5 8.06324 1.5ZM10.3132 5.25V6C10.3132 6.4125 10.6492 6.75 11.0632 6.75C11.4772 6.75 11.8132 6.4125 11.8132 6V5.25H12.7297C13.11 5.25 13.4295 5.535 13.4745 5.91L14.6212 15.66C14.6737 16.11 14.3257 16.5 13.8765 16.5H2.24999C1.80074 16.5 1.45274 16.11 1.50524 15.66L2.65199 5.91C2.69699 5.535 3.01649 5.25 3.39674 5.25H4.31324V6C4.31324 6.4125 4.64924 6.75 5.06324 6.75C5.47724 6.75 5.81324 6.4125 5.81324 6V5.25H10.3132ZM4.31324 3.75H3.39674C2.25599 3.75 1.29599 4.605 1.16249 5.7375L0.0157376 15.4875C-0.141762 16.8225 0.902988 18 2.24999 18H13.8765C15.2235 18 16.2682 16.8225 16.1107 15.4875L14.964 5.7375C14.8305 4.605 13.8705 3.75 12.7297 3.75H11.8132C11.8132 1.68 10.134 0 8.06324 0C5.99174 0 4.31324 1.68 4.31324 3.75Z" fill="white" />
                            </svg>
                        </div>
                        <div className="like-icon p- ">
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_0_87" fill="white">
                                    <path fillRule="evenodd" clip-rule="evenodd" d="M5.52918 2.11765C4.61435 2.11765 3.75671 2.47129 3.11506 3.114C1.78306 4.44812 1.78306 6.61977 3.11612 7.956L10.5904 15.4429L18.0656 7.956C19.3987 6.61977 19.3987 4.44812 18.0656 3.114C16.7824 1.82753 14.5207 1.82965 13.2374 3.114L11.34 5.01459C10.9419 5.41376 10.2388 5.41376 9.84071 5.01459L7.94329 3.11294C7.30165 2.47129 6.44506 2.11765 5.52918 2.11765ZM10.5904 18C10.3098 18 10.0398 17.8888 9.84176 17.6887L1.61682 9.45106C-0.538941 7.29106 -0.538941 3.77682 1.61682 1.61682C2.65871 0.574941 4.04788 0 5.52918 0C7.01047 0 8.40071 0.574941 9.44153 1.61682L10.5904 2.76776L11.7392 1.61788C12.7811 0.574941 14.1702 0 15.6526 0C17.1328 0 18.5231 0.574941 19.5639 1.61682C21.7207 3.77682 21.7207 7.29106 19.5649 9.45106L11.34 17.6898C11.1409 17.8888 10.872 18 10.5904 18Z" />
                                </mask>
                                <path fillRule="evenodd" clip-rule="evenodd" d="M5.52918 2.11765C4.61435 2.11765 3.75671 2.47129 3.11506 3.114C1.78306 4.44812 1.78306 6.61977 3.11612 7.956L10.5904 15.4429L18.0656 7.956C19.3987 6.61977 19.3987 4.44812 18.0656 3.114C16.7824 1.82753 14.5207 1.82965 13.2374 3.114L11.34 5.01459C10.9419 5.41376 10.2388 5.41376 9.84071 5.01459L7.94329 3.11294C7.30165 2.47129 6.44506 2.11765 5.52918 2.11765ZM10.5904 18C10.3098 18 10.0398 17.8888 9.84176 17.6887L1.61682 9.45106C-0.538941 7.29106 -0.538941 3.77682 1.61682 1.61682C2.65871 0.574941 4.04788 0 5.52918 0C7.01047 0 8.40071 0.574941 9.44153 1.61682L10.5904 2.76776L11.7392 1.61788C12.7811 0.574941 14.1702 0 15.6526 0C17.1328 0 18.5231 0.574941 19.5639 1.61682C21.7207 3.77682 21.7207 7.29106 19.5649 9.45106L11.34 17.6898C11.1409 17.8888 10.872 18 10.5904 18Z" fill="white" />
                                <path d="M3.11506 3.114L3.32736 3.32596L3.32737 3.32596L3.11506 3.114ZM3.11612 7.956L2.90373 8.16788L2.90381 8.16795L3.11612 7.956ZM10.5904 15.4429L10.378 15.6549L10.5903 15.8676L10.8027 15.6549L10.5904 15.4429ZM18.0656 7.956L18.2779 8.16797L18.278 8.16788L18.0656 7.956ZM18.0656 3.114L17.8533 3.32587L17.8534 3.32605L18.0656 3.114ZM13.2374 3.114L13.0252 2.90196L13.0251 2.90205L13.2374 3.114ZM11.34 5.01459L11.1277 4.80263L11.1276 4.80274L11.34 5.01459ZM9.84071 5.01459L10.0531 4.80274L10.0531 4.80269L9.84071 5.01459ZM7.94329 3.11294L8.15566 2.90105L8.15543 2.90081L7.94329 3.11294ZM9.84176 17.6887L10.055 17.4777L10.0541 17.4767L9.84176 17.6887ZM1.61682 9.45106L1.40448 9.66298L1.40453 9.66303L1.61682 9.45106ZM1.61682 1.61682L1.40469 1.40469L1.40448 1.4049L1.61682 1.61682ZM9.44153 1.61682L9.65386 1.40489L9.65377 1.4048L9.44153 1.61682ZM10.5904 2.76776L10.378 2.9797L10.5903 3.19232L10.8026 2.9798L10.5904 2.76776ZM11.7392 1.61788L11.9514 1.82992L11.9514 1.82991L11.7392 1.61788ZM19.5639 1.61682L19.7762 1.40485L19.7761 1.4048L19.5639 1.61682ZM19.5649 9.45106L19.7773 9.66301L19.7773 9.66298L19.5649 9.45106ZM11.34 17.6898L11.5521 17.9019L11.5523 17.9017L11.34 17.6898ZM5.52918 1.81765C4.53547 1.81765 3.60122 2.20243 2.90275 2.90204L3.32737 3.32596C3.9122 2.74016 4.69323 2.41765 5.52918 2.41765V1.81765ZM2.90276 2.90204C1.45372 4.35338 1.45396 6.71465 2.90373 8.16788L3.3285 7.74412C2.11216 6.52488 2.1124 4.54286 3.32736 3.32596L2.90276 2.90204ZM2.90381 8.16795L10.378 15.6549L10.8027 15.231L3.32843 7.74405L2.90381 8.16795ZM10.8027 15.6549L18.2779 8.16797L17.8533 7.74403L10.3781 15.231L10.8027 15.6549ZM18.278 8.16788C19.7278 6.71464 19.7281 4.3533 18.2779 2.90195L17.8534 3.32605C19.0694 4.54293 19.0696 6.52489 17.8533 7.74412L18.278 8.16788ZM18.278 2.90213C16.8773 1.49794 14.4254 1.50055 13.0252 2.90196L13.4496 3.32604C14.616 2.15875 16.6874 2.15712 17.8533 3.32587L18.278 2.90213ZM13.0251 2.90205L11.1277 4.80263L11.5523 5.22654L13.4497 3.32595L13.0251 2.90205ZM11.1276 4.80274C10.8467 5.08438 10.334 5.08438 10.0531 4.80274L9.62829 5.22644C10.1436 5.74315 11.0371 5.74315 11.5524 5.22644L11.1276 4.80274ZM10.0531 4.80269L8.15566 2.90105L7.73093 3.32484L9.62834 5.22648L10.0531 4.80269ZM8.15543 2.90081C7.45705 2.20244 6.52396 1.81765 5.52918 1.81765V2.41765C6.36615 2.41765 7.14624 2.74015 7.73116 3.32507L8.15543 2.90081ZM10.5904 17.7C10.3889 17.7 10.196 17.6202 10.055 17.4777L9.62851 17.8997C9.88352 18.1574 10.2306 18.3 10.5904 18.3V17.7ZM10.0541 17.4767L1.82912 9.23909L1.40453 9.66303L9.62947 17.9007L10.0541 17.4767ZM1.82916 9.23913C-0.209721 7.19624 -0.209721 3.87164 1.82916 1.82875L1.40448 1.4049C-0.868161 3.68201 -0.868161 7.38587 1.40448 9.66298L1.82916 9.23913ZM1.82896 1.82896C2.81437 0.843541 4.12715 0.3 5.52918 0.3V-0.3C3.96861 -0.3 2.50304 0.306341 1.40469 1.40469L1.82896 1.82896ZM5.52918 0.3C6.93129 0.3 8.24504 0.843599 9.22929 1.82885L9.65377 1.4048C8.55637 0.306284 7.08965 -0.3 5.52918 -0.3V0.3ZM9.2292 1.82876L10.378 2.9797L10.8027 2.55583L9.65386 1.40489L9.2292 1.82876ZM10.8026 2.9798L11.9514 1.82992L11.5269 1.40585L10.3781 2.55573L10.8026 2.9798ZM11.9514 1.82991C12.9368 0.843546 14.2495 0.3 15.6526 0.3V-0.3C14.091 -0.3 12.6253 0.306336 11.5269 1.40586L11.9514 1.82991ZM15.6526 0.3C17.0536 0.3 18.3674 0.843577 19.3516 1.82885L19.7761 1.4048C18.6787 0.306305 17.212 -0.3 15.6526 -0.3V0.3ZM19.3516 1.8288C21.3915 3.87169 21.3915 7.19625 19.3526 9.23913L19.7773 9.66298C22.0499 7.38586 22.0499 3.68196 19.7762 1.40485L19.3516 1.8288ZM19.3526 9.2391L11.1277 17.4778L11.5523 17.9017L19.7773 9.66301L19.3526 9.2391ZM11.1279 17.4776C10.9852 17.6203 10.7926 17.7 10.5904 17.7V18.3C10.9514 18.3 11.2967 18.1573 11.5521 17.9019L11.1279 17.4776Z" fill="black" mask="url(#path-1-inside-1_0_87)" />
                            </svg>

                        </div>
                        <div className="about p-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clip-rule="evenodd" d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM3.96314 14.6429C2.97328 13.3577 2.38462 11.7476 2.38462 10C2.38462 5.79414 5.79414 2.38462 10 2.38462C14.2059 2.38462 17.6154 5.79414 17.6154 10C17.6154 11.7479 17.0265 13.3583 16.0363 14.6436C15.5845 14.2339 15.0071 13.9375 14.2472 13.664C14.1334 13.6231 14.0167 13.5828 13.8711 13.5338L13.5164 13.4151C12.654 13.1241 12.3488 12.9392 12.2779 12.7054C12.2754 12.6975 12.2716 12.6829 12.2662 12.6545C12.2355 12.4925 12.2425 12.3153 12.3056 12.1682C12.3428 12.0815 12.3995 12.0043 12.4845 11.9332C13.4409 11.0698 13.9231 10.0967 13.9231 8.76942C13.9231 6.45697 12.1138 4.69231 10 4.69231C7.8717 4.69231 6.07692 6.42689 6.07692 8.76942C6.07692 10.0928 6.54654 11.0375 7.46886 11.906C7.58753 12.0061 7.64712 12.0794 7.68765 12.1563C7.7661 12.305 7.77614 12.4774 7.74178 12.6362C7.73932 12.6475 7.73727 12.6561 7.73599 12.6614C7.73444 12.6679 7.734 12.6697 7.73528 12.6663C7.66696 12.909 7.38398 13.0833 6.58653 13.3557L6.178 13.4937C6.0076 13.5515 5.87214 13.5989 5.73956 13.6479C4.99231 13.9237 4.41489 14.2283 3.96314 14.6429ZM4.90599 15.6609C6.25532 16.8759 8.0413 17.6154 10 17.6154C11.9582 17.6154 13.7439 16.8763 15.0931 15.6618C14.791 15.394 14.3722 15.1806 13.7783 14.9668C13.675 14.9296 13.5668 14.8923 13.4296 14.8462L13.0738 14.727C11.7858 14.2925 11.2059 13.9412 10.9564 13.1187C10.9407 13.0698 10.9225 13.0001 10.9058 12.9123C10.8282 12.5029 10.8458 12.0592 11.0331 11.6225C11.1549 11.3384 11.3421 11.0835 11.5764 10.8883C12.2362 10.2922 12.5385 9.68214 12.5385 8.76942C12.5385 7.22952 11.3567 6.07692 10 6.07692C8.62603 6.07692 7.46154 7.20236 7.46154 8.76942C7.46154 9.68126 7.75685 10.2753 8.38507 10.8688C8.6109 11.0559 8.78663 11.2719 8.91234 11.5103C9.16378 11.9869 9.19244 12.4792 9.09505 12.9291C9.07511 13.0212 9.05319 13.0945 9.05311 13.0864C8.83511 13.896 8.27135 14.2434 7.03409 14.666L6.62289 14.8049C6.46309 14.8591 6.33831 14.9028 6.219 14.9468C5.63192 15.1635 5.21074 15.3849 4.90599 15.6609Z" fill="white" />
                                <path d="M3.96314 14.6429L3.92353 14.6734L3.95679 14.7166L3.99695 14.6797L3.96314 14.6429ZM16.0363 14.6436L16.0027 14.6806L16.0428 14.717L16.0759 14.6741L16.0363 14.6436ZM14.2472 13.664L14.2641 13.617L14.2472 13.664ZM13.8711 13.5338L13.887 13.4864L13.887 13.4864L13.8711 13.5338ZM13.5164 13.4151L13.5005 13.4625L13.5006 13.4625L13.5164 13.4151ZM12.2779 12.7054L12.3257 12.6908L12.3256 12.6906L12.2779 12.7054ZM12.2662 12.6545L12.2171 12.6638V12.6638L12.2662 12.6545ZM12.3056 12.1682L12.3515 12.1879V12.1879L12.3056 12.1682ZM12.4845 11.9332L12.5166 11.9716L12.518 11.9703L12.4845 11.9332ZM7.46886 11.906L7.43453 11.9425L7.43662 11.9443L7.46886 11.906ZM7.68765 12.1563L7.64343 12.1796L7.68765 12.1563ZM7.74178 12.6362L7.79065 12.6467L7.74178 12.6362ZM7.73599 12.6614L7.68736 12.6498L7.68736 12.6498L7.73599 12.6614ZM7.73528 12.6663L7.78341 12.6798L7.68838 12.6489L7.73528 12.6663ZM6.58653 13.3557L6.60253 13.4031L6.60269 13.403L6.58653 13.3557ZM6.178 13.4937L6.162 13.4463L6.16193 13.4463L6.178 13.4937ZM5.73956 13.6479L5.72225 13.601V13.601L5.73956 13.6479ZM4.90599 15.6609L4.87242 15.6239L4.83139 15.661L4.87253 15.6981L4.90599 15.6609ZM15.0931 15.6618L15.1265 15.6989L15.1681 15.6615L15.1262 15.6243L15.0931 15.6618ZM13.7783 14.9668L13.7952 14.9198L13.7783 14.9668ZM13.4296 14.8462L13.4456 14.7988L13.4455 14.7988L13.4296 14.8462ZM13.0738 14.727L13.0578 14.7744L13.0579 14.7745L13.0738 14.727ZM10.9564 13.1187L11.0043 13.1042L11.004 13.1034L10.9564 13.1187ZM10.9058 12.9123L10.955 12.903L10.9058 12.9123ZM11.0331 11.6225L11.079 11.6422L11.0331 11.6225ZM11.5764 10.8883L11.6084 10.9268L11.6099 10.9254L11.5764 10.8883ZM8.38507 10.8688L8.35066 10.9053L8.35318 10.9074L8.38507 10.8688ZM8.91234 11.5103L8.95657 11.4869L8.91234 11.5103ZM9.09505 12.9291L9.04618 12.9185V12.9185L9.09505 12.9291ZM9.05311 13.0864L9.10311 13.0859L9.00483 13.0734L9.05311 13.0864ZM7.03409 14.666L7.05008 14.7134L7.05025 14.7133L7.03409 14.666ZM6.62289 14.8049L6.60689 14.7575L6.60682 14.7575L6.62289 14.8049ZM6.219 14.9468L6.23632 14.9937L6.219 14.9468ZM18.95 10C18.95 14.9429 14.9429 18.95 10 18.95V19.05C14.9982 19.05 19.05 14.9982 19.05 10H18.95ZM10 1.05C14.9429 1.05 18.95 5.05705 18.95 10H19.05C19.05 5.00182 14.9982 0.95 10 0.95V1.05ZM1.05 10C1.05 5.05705 5.05705 1.05 10 1.05V0.95C5.00182 0.95 0.95 5.00182 0.95 10H1.05ZM10 18.95C5.05705 18.95 1.05 14.9429 1.05 10H0.95C0.95 14.9982 5.00182 19.05 10 19.05V18.95ZM2.33462 10C2.33462 11.759 2.92717 13.3798 3.92353 14.6734L4.00275 14.6124C3.01939 13.3356 2.43462 11.7362 2.43462 10H2.33462ZM10 2.33462C5.76653 2.33462 2.33462 5.76653 2.33462 10H2.43462C2.43462 5.82175 5.82175 2.43462 10 2.43462V2.33462ZM17.6654 10C17.6654 5.76653 14.2335 2.33462 10 2.33462V2.43462C14.1782 2.43462 17.5654 5.82175 17.5654 10H17.6654ZM16.0759 14.6741C17.0726 13.3804 17.6654 11.7594 17.6654 10H17.5654C17.5654 11.7365 16.9804 13.3363 15.9967 14.6131L16.0759 14.6741ZM16.0699 14.6066C15.6112 14.1906 15.0268 13.8915 14.2641 13.617L14.2303 13.7111C14.9873 13.9836 15.5578 14.2772 16.0027 14.6806L16.0699 14.6066ZM14.2641 13.617C14.1499 13.5759 14.0328 13.5355 13.887 13.4864L13.8552 13.5812C14.0006 13.6301 14.1169 13.6703 14.2303 13.7111L14.2641 13.617ZM13.887 13.4864L13.5323 13.3677L13.5006 13.4625L13.8552 13.5812L13.887 13.4864ZM13.5324 13.3677C13.1016 13.2224 12.8138 13.1047 12.6254 12.9955C12.4372 12.8865 12.3559 12.7902 12.3257 12.6908L12.23 12.7199C12.2708 12.8544 12.3776 12.9675 12.5753 13.0821C12.7728 13.1966 13.0688 13.3168 13.5005 13.4625L13.5324 13.3677ZM12.3256 12.6906C12.324 12.6852 12.3205 12.6726 12.3154 12.6452L12.2171 12.6638C12.2227 12.6932 12.2269 12.7098 12.2301 12.7201L12.3256 12.6906ZM12.3154 12.6452C12.286 12.4901 12.2934 12.3235 12.3515 12.1879L12.2596 12.1485C12.1916 12.307 12.1851 12.4949 12.2171 12.6638L12.3154 12.6452ZM12.3515 12.1879C12.3855 12.1088 12.4372 12.0379 12.5166 11.9716L12.4524 11.8949C12.3617 11.9707 12.3001 12.0541 12.2596 12.1485L12.3515 12.1879ZM12.518 11.9703C13.484 11.0982 13.9731 10.112 13.9731 8.76942H13.8731C13.8731 10.0814 13.3978 11.0413 12.451 11.8961L12.518 11.9703ZM13.9731 8.76942C13.9731 6.43025 12.1423 4.64231 10 4.64231V4.74231C12.0853 4.74231 13.8731 6.48368 13.8731 8.76942H13.9731ZM10 4.64231C7.84332 4.64231 6.02692 6.40005 6.02692 8.76942H6.12692C6.12692 6.45374 7.90008 4.74231 10 4.74231V4.64231ZM6.02692 8.76942C6.02692 10.108 6.50332 11.0655 7.43458 11.9424L7.50314 11.8696C6.58976 11.0095 6.12692 10.0776 6.12692 8.76942H6.02692ZM7.43662 11.9443C7.55223 12.0418 7.60685 12.1102 7.64343 12.1796L7.73188 12.1329C7.68739 12.0486 7.62284 11.9705 7.5011 11.8678L7.43662 11.9443ZM7.64343 12.1796C7.7152 12.3156 7.72539 12.4755 7.69291 12.6256L7.79065 12.6467C7.8269 12.4793 7.81701 12.2943 7.73188 12.1329L7.64343 12.1796ZM7.69291 12.6256C7.69057 12.6364 7.68863 12.6445 7.68736 12.6498L7.78461 12.6731C7.78592 12.6676 7.78807 12.6586 7.79065 12.6467L7.69291 12.6256ZM7.68736 12.6498C7.6869 12.6517 7.6858 12.6562 7.6853 12.6591C7.68519 12.6597 7.68497 12.661 7.6848 12.6627C7.68472 12.6635 7.68459 12.6649 7.68455 12.6667C7.68451 12.668 7.68445 12.6719 7.68529 12.6766C7.68571 12.679 7.68667 12.6835 7.68903 12.6887C7.69126 12.6936 7.69647 12.703 7.70746 12.71C7.73619 12.7285 7.76171 12.7103 7.76564 12.7072C7.77171 12.7024 7.77514 12.6973 7.77592 12.6961C7.77726 12.6941 7.77819 12.6925 7.77865 12.6916C7.7802 12.6887 7.7812 12.6862 7.78129 12.6859C7.78164 12.6851 7.78195 12.6842 7.78217 12.6836L7.68838 12.6489C7.68756 12.6512 7.68868 12.6478 7.69061 12.6442C7.69105 12.6434 7.69195 12.6418 7.69327 12.6398C7.69403 12.6387 7.69744 12.6336 7.70349 12.6288C7.7074 12.6257 7.73291 12.6075 7.76163 12.626C7.77261 12.6331 7.77782 12.6424 7.78005 12.6473C7.78241 12.6525 7.78336 12.6569 7.78378 12.6593C7.78461 12.6641 7.78455 12.6679 7.78452 12.6691C7.78447 12.6709 7.78435 12.6722 7.78427 12.673C7.78411 12.6745 7.78392 12.6757 7.78385 12.6761C7.78364 12.6773 7.78353 12.6776 7.78462 12.6731L7.68736 12.6498ZM7.68715 12.6527C7.65775 12.7572 7.58161 12.8526 7.4085 12.9571C7.23445 13.0621 6.96872 13.1723 6.57037 13.3084L6.60269 13.403C7.00179 13.2667 7.27627 13.1536 7.46016 13.0427C7.64497 12.9312 7.74448 12.8181 7.78341 12.6798L7.68715 12.6527ZM6.57053 13.3084L6.162 13.4463L6.19399 13.541L6.60253 13.4031L6.57053 13.3084ZM6.16193 13.4463C5.99129 13.5042 5.85539 13.5518 5.72225 13.601L5.75688 13.6948C5.8889 13.646 6.02392 13.5987 6.19407 13.541L6.16193 13.4463ZM5.72225 13.601C4.97198 13.8779 4.38781 14.1853 3.92933 14.606L3.99695 14.6797C4.44196 14.2713 5.01264 13.9695 5.75688 13.6948L5.72225 13.601ZM4.87253 15.6981C6.23069 16.921 8.02847 17.6654 10 17.6654V17.5654C8.05413 17.5654 6.27995 16.8308 4.93944 15.6238L4.87253 15.6981ZM10 17.6654C11.9711 17.6654 13.7685 16.9214 15.1265 15.6989L15.0596 15.6246C13.7192 16.8312 11.9454 17.5654 10 17.5654V17.6654ZM13.7613 15.0139C14.3531 15.2269 14.7649 15.4377 15.0599 15.6992L15.1262 15.6243C14.8171 15.3503 14.3913 15.1343 13.7952 14.9198L13.7613 15.0139ZM13.4137 14.8936C13.5507 14.9396 13.6585 14.9768 13.7613 15.0139L13.7952 14.9198C13.6915 14.8824 13.5829 14.845 13.4456 14.7988L13.4137 14.8936ZM13.0579 14.7745L13.4138 14.8936L13.4455 14.7988L13.0897 14.6796L13.0579 14.7745ZM10.9086 13.1332C11.0364 13.5546 11.2501 13.8573 11.5963 14.1088C11.94 14.3586 12.4133 14.557 13.0578 14.7744L13.0898 14.6797C12.4463 14.4625 11.9856 14.268 11.6551 14.0279C11.327 13.7895 11.126 13.5053 11.0043 13.1042L10.9086 13.1332ZM10.8567 12.9216C10.8737 13.0111 10.8923 13.0828 10.9088 13.134L11.004 13.1034C10.989 13.0567 10.9713 12.9891 10.955 12.903L10.8567 12.9216ZM10.9871 11.6028C10.7952 12.0502 10.7776 12.5043 10.8567 12.9216L10.955 12.903C10.8789 12.5015 10.8963 12.0682 11.079 11.6422L10.9871 11.6028ZM11.5444 10.8499C11.3038 11.0503 11.1119 11.3117 10.9871 11.6028L11.079 11.6422C11.1979 11.3651 11.3804 11.1167 11.6084 10.9268L11.5444 10.8499ZM12.4885 8.76942C12.4885 9.22003 12.4139 9.5933 12.2595 9.92659C12.105 10.26 11.8692 10.5564 11.5429 10.8512L11.6099 10.9254C11.9433 10.6242 12.1886 10.3174 12.3502 9.96863C12.5119 9.61967 12.5885 9.23153 12.5885 8.76942H12.4885ZM10 6.12692C11.3275 6.12692 12.4885 7.25556 12.4885 8.76942H12.5885C12.5885 7.20347 11.3859 6.02692 10 6.02692V6.12692ZM7.51154 8.76942C7.51154 7.22852 8.65508 6.12692 10 6.12692V6.02692C8.59699 6.02692 7.41154 7.1762 7.41154 8.76942H7.51154ZM8.41941 10.8325C8.10853 10.5388 7.88222 10.247 7.73327 9.91788C7.5844 9.5889 7.51154 9.21971 7.51154 8.76942H7.41154C7.41154 9.23097 7.48633 9.61472 7.64217 9.95911C7.79794 10.3033 8.03339 10.6054 8.35073 10.9052L8.41941 10.8325ZM8.95657 11.4869C8.82764 11.2425 8.64763 11.0214 8.41696 10.8303L8.35318 10.9074C8.57418 11.0904 8.74562 11.3014 8.86812 11.5336L8.95657 11.4869ZM9.14392 12.9397C9.2434 12.4801 9.21432 11.9756 8.95657 11.4869L8.86812 11.5336C9.11324 11.9983 9.14149 12.4782 9.04618 12.9185L9.14392 12.9397ZM9.00312 13.0869C9.00312 13.0871 9.0028 13.0971 9.00784 13.108C9.01062 13.114 9.01939 13.1294 9.03963 13.1351C9.0601 13.1409 9.07581 13.1322 9.08151 13.1283C9.09163 13.1214 9.09652 13.1124 9.0966 13.1122C9.09806 13.1098 9.09906 13.1077 9.09958 13.1065C9.10149 13.1024 9.10317 13.0975 9.10436 13.0939C9.10711 13.0856 9.11074 13.0734 9.11482 13.0587C9.12305 13.0289 9.13375 12.9867 9.14392 12.9397L9.04618 12.9185C9.03642 12.9636 9.02618 13.004 9.01845 13.032C9.01455 13.046 9.01143 13.0564 9.00943 13.0624C9.00824 13.066 9.00805 13.0663 9.00866 13.0649C9.00885 13.0645 9.00957 13.0629 9.01078 13.0609C9.01139 13.0599 9.01253 13.0581 9.01422 13.0559C9.01555 13.0542 9.01919 13.0498 9.02524 13.0456C9.03086 13.0418 9.0465 13.0331 9.0669 13.0389C9.08708 13.0446 9.0958 13.06 9.09853 13.0658C9.10154 13.0723 9.10239 13.0779 9.10268 13.08C9.10304 13.0826 9.1031 13.0848 9.10311 13.0859L9.00312 13.0869ZM7.05025 14.7133C7.66938 14.5019 8.12613 14.3073 8.45572 14.0614C8.78783 13.8136 8.98956 13.5147 9.10139 13.0994L9.00483 13.0734C8.89866 13.4677 8.70952 13.7473 8.39592 13.9813C8.07982 14.2171 7.63605 14.4076 7.01793 14.6187L7.05025 14.7133ZM6.63889 14.8522L7.05008 14.7134L7.01809 14.6186L6.60689 14.7575L6.63889 14.8522ZM6.23632 14.9937C6.35506 14.9499 6.47939 14.9064 6.63896 14.8522L6.60682 14.7575C6.44678 14.8118 6.32156 14.8557 6.20169 14.8999L6.23632 14.9937ZM4.93956 15.698C5.23737 15.4282 5.65163 15.2095 6.23632 14.9937L6.20169 14.8999C5.61222 15.1175 5.1841 15.3415 4.87242 15.6239L4.93956 15.698Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            <Subheader></Subheader>
            </header >
    );
};

export default Header;