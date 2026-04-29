import driveSmart from '../../assets/images/drive-smart.svg';
import driveSmartMobile from '../../assets/images/drive-smart-mobile.svg';

export default function StatsSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <img src={driveSmart} alt="Drive Smart, Safe, and Your Way" className="w-full h-auto block max-[720px]:hidden" />
      <img src={driveSmartMobile} alt="Drive Smart, Safe, and Your Way" className="w-full h-auto hidden max-[720px]:block" />
    </section>
  );
}
