import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className="background">
      <div className="grad_shad_top"></div>
        <div className="grad_rec_top"></div>

        <div className="container-trans">
          <h1 className="title">ДНЕВНИК КАЧКА</h1>
          <Link href="/calendar" className="auth-button">
            <span>Войти</span>
          </Link>
        </div>

        <div className="grad_rec_bottom"></div>
      <div className="grad_shad_bottom"></div>
    </div>
  );
}
