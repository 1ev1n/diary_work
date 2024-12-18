import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className="frame">
      <div className='background'>
        <div className="grad_shad_top"></div>
          <div className="grad_rec_top"></div>

            <div className='title-container'>
              <h1 className="title-auth">ДНЕВНИК КАЧКА</h1>
            </div>

            <Link href="/calendar" className="auth-button">
              <span className='auth-text'>Войти</span>
            </Link>

          <div className="grad_rec_bottom"></div>
        <div className="grad_shad_bottom"></div>
      </div>
    </div>
  );
}
