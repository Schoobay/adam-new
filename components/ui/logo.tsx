import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href='/'
      className='max-h-full md:w-32 items-center'
      aria-label='Cruip'
    >
      <img
        src='/images/logo.png'
        alt=''
        className='max-h-full max-w-full object-cover'
      />
    </Link>
  );
}
