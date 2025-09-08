import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import './App.css'
import ContactForm from './contact-form/contactForm';
import teacher from './assets/teacher.svg'
import groupOne from './assets/groupOne.jpg'
import groupTwo from './assets/groupTwo.jpg'
import { useState } from 'react';
import Link from '@mui/material/Link';


function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div id="home"></div>
      <header className='w-full nav-container sticky top-0 z-40 bg-white md:px-32'>
        <div className="flex justify-center py-4 md:justify-end">
          <nav>
            <ul className="flex flex-row gap-4">
              <li className='p-1 md:p-4'><a href="#home">Начало</a></li>
              <li className='p-1 md:p-4'><a href="#courses">Курсове</a></li>
              <li className='p-1 md:p-4'><a href="#prices">Цени</a></li>
              <li className='p-1 md:p-4'><a href="#contact">Контакти</a></li>
            </ul>
          </nav>
        </div>
        <div>

        </div>
      </header>
      <div className="flex flex-col gap-10 px-10 items-center md:px-32">
        <section className='flex flex-col gap-6 items-center justify-center w-full md:flex-row md:justify-between md:items-start'>
          <div className='flex flex-col w-48 gap-4 items-center md:items-start'>
            <Typography className='text-center md:text-justify' variant="h3">Овладей Математиката с Увереност</Typography>
            <Typography className='text-center md:text-justify'> Курсове и индивидуални уроци за 5–12 клас</Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>ЗАПИШИ СЕ</Button>
          </div>
          <Box className='max-w-sm' component='img' src={teacher} />
        </section>
        <span id="courses"></span>
        <section className='flex flex-col items-center justify-between gap-10 w-full md:flex-row'>
          <div className='flex flex-col w-48 gap-4 items-center md:items-start'>
            <svg width="61" height="71" viewBox="0 0 61 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.5 30C38.7843 30 45.5 23.2843 45.5 15C45.5 6.71573 38.7843 0 30.5 0C22.2157 0 15.5 6.71573 15.5 15C15.5 23.2843 22.2157 30 30.5 30Z" fill="#9CA3AF" />
              <path d="M60.5 53.875C60.5 63.1938 60.5 70.75 30.5 70.75C0.5 70.75 0.5 63.1938 0.5 53.875C0.5 44.5563 13.9325 37 30.5 37C47.0675 37 60.5 44.5563 60.5 53.875Z" fill="#9CA3AF" />
            </svg>
            <Typography variant="h6" className='text-center md:text-justify'>Индивидуални Уроци</Typography>
            <Typography variant="body1" className='text-center md:text-justify'>Персонализирани уроци, съобразени с вашето ниво и цели</Typography>
          </div>
          <div className='flex flex-col w-48 gap-4  items-center md:items-start'>
            <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1429 14.7951C10.1429 10.8712 11.6122 7.10798 14.2277 4.33337C16.8431 1.55876 20.3905 0 24.0893 0C27.7881 0 31.3354 1.55876 33.9509 4.33337C36.5664 7.10798 38.0357 10.8712 38.0357 14.7951C38.0357 18.7189 36.5664 22.4821 33.9509 25.2567C31.3354 28.0313 27.7881 29.5901 24.0893 29.5901C20.3905 29.5901 16.8431 28.0313 14.2277 25.2567C11.6122 22.4821 10.1429 18.7189 10.1429 14.7951ZM43.1071 22.8651C43.1071 21.2754 43.4023 19.7013 43.9757 18.2327C44.5492 16.764 45.3897 15.4296 46.4493 14.3055C47.5089 13.1815 48.7668 12.2898 50.1512 11.6815C51.5356 11.0731 53.0194 10.76 54.5179 10.76C56.0163 10.76 57.5001 11.0731 58.8846 11.6815C60.269 12.2898 61.5269 13.1815 62.5865 14.3055C63.646 15.4296 64.4865 16.764 65.06 18.2327C65.6334 19.7013 65.9286 21.2754 65.9286 22.8651C65.9286 26.0755 64.7264 29.1545 62.5865 31.4246C60.4465 33.6948 57.5442 34.9701 54.5179 34.9701C51.4916 34.9701 48.5892 33.6948 46.4493 31.4246C44.3093 29.1545 43.1071 26.0755 43.1071 22.8651ZM0 60.5252C9.52017e-08 53.7476 2.53797 47.2475 7.05559 42.455C11.5732 37.6625 17.7004 34.9701 24.0893 34.9701C30.4782 34.9701 36.6054 37.6625 41.123 42.455C45.6406 47.2475 48.1786 53.7476 48.1786 60.5252V60.536L48.1752 60.9628C48.168 61.4189 48.0516 61.8656 47.8369 62.2609C47.6222 62.6562 47.3163 62.9871 46.9479 63.2224C40.0479 67.6298 32.1435 69.9528 24.0893 69.9402C15.7316 69.9402 7.90805 67.487 1.23405 63.2224C0.865021 62.9875 0.558421 62.6568 0.343121 62.2615C0.127821 61.8662 0.0109047 61.4193 0.00338111 60.9628L0 60.5252ZM53.25 60.536L53.2466 61.0525C53.2277 62.2479 52.9586 63.424 52.4589 64.4957C53.1396 64.5387 53.8259 64.5602 54.5179 64.5602C59.9139 64.5602 65.0225 63.2332 69.5665 60.8695C69.9766 60.6569 70.3251 60.3307 70.575 59.9254C70.825 59.5201 70.9671 59.0508 70.9865 58.5669L71 57.8352C71.0005 54.8863 70.2979 51.9852 68.9576 49.4017C67.6174 46.8182 65.683 44.6363 63.3343 43.0589C60.9857 41.4815 58.2992 40.5599 55.5246 40.3798C52.75 40.1996 49.9776 40.7669 47.4652 42.0287C51.2258 47.3695 53.2542 53.8589 53.2466 60.5252L53.25 60.536Z" fill="#9CA3AF" />
            </svg>

            <Typography variant="h6">Групови занятия</Typography>
            <Typography variant="body1" className='text-center md:text-justify'> Малки групи с фокус върху разбиране.</Typography>
          </div>
          <div className='flex flex-col w-48 gap-4  items-center md:items-start'>
            <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.0769 0H10.9231C8.02707 0.00316233 5.25058 1.155 3.20279 3.20279C1.155 5.25058 0.00316233 8.02707 0 10.9231V60.0769C0.00316233 62.9729 1.155 65.7494 3.20279 67.7972C5.25058 69.845 8.02707 70.9968 10.9231 71H60.0769C62.9729 70.9968 65.7494 69.845 67.7972 67.7972C69.845 65.7494 70.9968 62.9729 71 60.0769V10.9231C70.9968 8.02707 69.845 5.25058 67.7972 3.20279C65.7494 1.155 62.9729 0.00316233 60.0769 0ZM53.9754 23.6024L31.0369 50.9101C30.7853 51.2098 30.4722 51.4519 30.1188 51.62C29.7655 51.7882 29.3801 51.8784 28.9888 51.8846H28.9427C28.56 51.8845 28.1815 51.8039 27.8319 51.648C27.4823 51.4922 27.1694 51.2646 26.9134 50.98L17.0827 40.057C16.833 39.7922 16.6388 39.4801 16.5114 39.1392C16.3841 38.7983 16.3262 38.4353 16.3411 38.0717C16.356 37.708 16.4435 37.351 16.5984 37.0217C16.7532 36.6923 16.9724 36.3973 17.2429 36.1538C17.5134 35.9104 17.8299 35.7234 18.1737 35.604C18.5175 35.4846 18.8817 35.4352 19.2449 35.4585C19.6081 35.4819 19.9629 35.5776 20.2886 35.7401C20.6143 35.9025 20.9042 36.1285 21.1413 36.4046L28.8711 44.9928L49.7939 20.0899C50.2632 19.5473 50.9272 19.2112 51.6423 19.1542C52.3575 19.0972 53.0663 19.324 53.6157 19.7854C54.165 20.2468 54.5107 20.9059 54.578 21.6201C54.6453 22.3344 54.4288 23.0464 53.9754 23.6024Z" fill="#9CA3AF" />
            </svg>

            <Typography variant="h6">НВО, ДЗИ и Прием</Typography>
            <Typography variant="body1" className='text-center md:text-justify'> НВО, ДЗИ и Прием
              Подготовка за НВО, ДЗИ и прием в елитни гимназии</Typography>
          </div>
        </section>
      </div>
      <div className="flex flex-col bg-[#27323D] gap-4 p-10 items-center md:px-32 mt-6">
        <section className='w-full flex flex-col gap-6 py-10 justify-center items-center md:flex-row md:justify-between'>
          <div className='flex flex-col gap-8 md:w-lg items-center md:items-start'>
            <Typography className='text-center text-white md:text-justify' variant="h3">За нас</Typography>
            <Typography className='text-white'> Ние сме екип от млади и опитни преподаватели - студенти по математика и информатика в Софийски университет “Св. Климент Охридски” с педагогическа подготовка. Обединява ни мотивацията да спомогнем за развитието на логическото и критичното мислене на бъдещото поколение</Typography>
            <Button className="max-w-40"variant="contained" onClick={() => setOpen(true)}> ЗАПИШИ СЕ</Button>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            <Box className='w-[256px] h-[120px] rounded-lg' component='img' src={groupOne} />
            <Box className='w-[176px] h-[196px] rounded-lg' component='img' src={groupTwo} />
            <span id="prices"></span>
          </div >
        </section>

        <section className='flex w-full items-center flex-col gap-6 md:flex-row md:flex-wrap md:gap-6 md:justify-between'>
          <div className='flex flex-col w-84 p-6 min-h-68 rounded-2xl gap-4 items-center md:items-start bg-white'>
            <Typography className='text-center md:text-start' variant="h4">Присъствено - Индивидъално</Typography>
            <Typography className='text-center md:text-start' sx={{ color: '#5F68FF' }} variant="h4">70 лв / 35.78 €</Typography>
            <ul className="list-disc ml-6">
              <li>Продължителност 1 ч. 30 мин.</li>
              <li>Месечна такса (4 занятия) 280 лв / 143.13 €</li>
            </ul>
          </div>
          <div className='flex flex-col w-84 p-6 min-h-68 rounded-2xl gap-4 items-center md:items-start bg-white'>
            <Typography className='text-center md:text-start' variant="h4">Присъствено - Групово (2 – 6 уч.)</Typography>
            <Typography className='text-center md:text-start' sx={{ color: '#5F68FF' }} variant="h4">40 лв / 20.47 €</Typography>
            <ul className="list-disc ml-6">
              <li>Продължителност 1 ч. 30 мин.</li>
              <li>Месечна такса (4 занятия) 160 лв / 81.81 €</li>
            </ul>
          </div>
          <div className='flex flex-col w-84 p-6 min-h-68 rounded-2xl gap-4 items-center md:items-start bg-white'>
            <Typography className='text-center md:text-start' variant="h4">Онлайн – Индивидуално</Typography>
            <Typography className='text-center md:text-start' sx={{ color: '#5F68FF' }} variant="h4">50 лв / 25.59 €</Typography>
            <ul className="list-disc ml-6">
              <li>Продължителност 1 ч. 30 мин.</li>
              <li>Месечна такса (4 занятия) 200 лв / 102.36 €</li>
            </ul>
          </div>
          <div className='flex flex-col w-84 bg-zinc-100 min-h-68 p-6 rounded-2xl gap-4 items-center md:items-start bg-white'>
            <Typography className='text-center md:text-start' variant="h4">Онлайн – Групово</Typography>
            <Typography className='text-center md:text-start' sx={{ color: '#5F68FF' }} variant="h4">30 лв / 15.34 €</Typography>
            <ul className="list-disc ml-6">
              <li>Продължителност 1 ч. 30 мин.</li>
              <li>Месечна такса (4 занятия) 120 лв / 61.36 €</li>
            </ul>
          </div>
        </section>
      </div>
      <footer id="contact" className='p-6 flex flex-col items-center gap-4 md:flex-row md:justify-evenly'>
        <Link
          href="https://www.google.com/maps?q=Бул.+Витоша+104,+София"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          color="#000"
        >
          Бул. Витоша 104, София
        </Link>
        <Link href="tel:+359885855735" underline="always" color="#000">
          +359 88 585 5735
        </Link>
        <Link
          href="mailto:contact@thalesacademy.bg"
          underline="always"
          color="#000"
        >
          contact@thalesacademy.bg
        </Link>

      </footer>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogActions>
          <Button sx={{
            color: 'black',
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'lightgrey',
            },
          }} onClick={() => setOpen(false)}>X</Button>
        </DialogActions>
        <DialogContent >
          <ContactForm />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App;