'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

export default function Result() {
  const searchParams = useSearchParams();

  const type1_sum = searchParams.get('type1_sum');
  const type2_sum = searchParams.get('type2_sum');

  console.log(type1_sum, type2_sum);

  return (
    <div>
      <div>{type1_sum}</div>
      <div>{type2_sum}</div>
      <Link href="/">Home</Link>
    </div>
  )
}