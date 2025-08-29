'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { transformationTypes } from '@/constants';
import { IImage } from '@/lib/database/models/image.model';
import { formUrlQuery } from '@/lib/utils';

import { Button } from '../ui/button';

import { Search } from './Search';

export const Collection = ({
  hasSearch = false,
  images,
  totalPages = 1,
  page,
}: {
  images: IImage[];
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // PAGINATION HANDLER
  const onPageChange = (action: string) => {
    const pageValue = action === 'next' ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: 'page',
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      <div className='collection-heading'>
        <h2 className='h2-bold text-cyan-400'>Recent Edits</h2>
        {hasSearch && <Search />}
      </div>

      {images.length > 0 ? (
        <ul className='collection-list'>
          {images.map((image) => (
            <Card image={image} key={image._id.toString()} />
          ))}
        </ul>
      ) : (
        <div className='collection-empty'>
          <p className='p-20-semibold text-cyan-400'>Empty List</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination className='mt-10'>
          <PaginationContent className='flex w-full'>
            <Button disabled={Number(page) <= 1} className='collection-btn' onClick={() => onPageChange('prev')}>
              <PaginationPrevious className='hover:bg-transparent hover:text-white' />
            </Button>

            <p className='flex-center p-16-medium w-fit flex-1 text-cyan-400'>
              {page} / {totalPages}
            </p>

            <Button
              className='button w-32 cyber-gradient-primary'
              onClick={() => onPageChange('next')}
              disabled={Number(page) >= totalPages}
            >
              <PaginationNext className='hover:bg-transparent hover:text-white' />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

const Card = ({ image }: { image: IImage }) => {
  return (
    <li>
      <Link href={`/transformations/${image._id}`} className='collection-card group'>
        <div className='relative overflow-hidden rounded-[10px]'>
          <CldImage
            src={image.publicId}
            alt={image.title}
            width={image.width}
            height={image.height}
            {...image.config}
            loading='lazy'
            className='h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110'
            sizes='(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        </div>
        <div className='flex-between'>
          <p className='p-20-semibold text-cyan-400'>{image.title}</p>
          <Image
            src={`/assets/icons/${transformationTypes[image.transformationType as TransformationTypeKey].icon}`}
            alt={transformationTypes[image.transformationType as TransformationTypeKey].title}
            width={24}
            height={24}
            className='transition-all duration-300 group-hover:scale-110'
          />
        </div>
      </Link>
    </li>
  );
};
