'use client';

import { useTransition } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { deleteImage } from '@/lib/actions/image.actions';

import { Button } from '../ui/button';

export const DeleteConfirmation = ({ imageId }: { imageId: string }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className='w-full rounded-full'>
        <Button type='button' className='btn-secondary h-[44px] w-full md:h-[54px]'>
          Delete Image
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className='flex flex-col gap-10 glass'>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this image?</AlertDialogTitle>
          <AlertDialogDescription className='p-16-regular'>This will permanently delete this image</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className='btn-outline'>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className='btn-secondary'
            onClick={() =>
              startTransition(async () => {
                await deleteImage(imageId);
              })
            }
          >
            {isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
