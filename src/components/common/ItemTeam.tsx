import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Team } from '~/shared/types';

const ItemTeam = ({
  name,
  occupation,
  image,
  items,
  containerClass,
  imageClass,
  panelClass,
  nameClass,
  occupationClass,
  itemsClass,
}: Team) => {
  return (
    <div className={twMerge('', containerClass)}>
      <Image
        src={image.src}
        width={240}
        height={320}
        sizes="240px"
        alt={image.alt}
        className={twMerge('', imageClass)}
      />
      <div className={twMerge('', panelClass)}>
        <h3 className={twMerge('', nameClass)}>{name}</h3>
        <p className={twMerge('', occupationClass)}>{occupation}</p>
        <ul className={twMerge('', itemsClass)}>
          {items &&
            items.map(
              ({ title, href, icon: Icon }, index2) =>
                Icon &&
                href && (
                  <li
                    key={`team-${index2}`}
                    className="m-1 flex items-center justify-center rounded-sm text-primary-700 hover:text-gray-500"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title as string}
                      className="flex items-center justify-center rounded-xs bg-transparent p-0.5 text-primary-900 hover:bg-primary-900 hover:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                    >
                      <Icon className="h-6 w-6 p-0.5" />
                    </a>
                  </li>
                ),
            )}
        </ul>
      </div>
    </div>
  );
};

export default ItemTeam;
