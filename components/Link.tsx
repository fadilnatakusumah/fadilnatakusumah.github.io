import NextLink from 'next/link';
import cs from "classnames";

interface LinkProps {
  active: boolean,
  href: string,
  children: any
}

export function Link({ active, href, children }: LinkProps) {
  return (
    <li>
      <NextLink href={href} passHref>
        <a className={cs({ active })}>{children}</a>
      </NextLink>
    </li>
  )
}

