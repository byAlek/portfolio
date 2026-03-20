import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Modal } from '@/components/ui/modal'
import type { Project } from '@/types/github-repo'
import { MediaImageList } from 'iconoir-react'
import { Button } from './ui/button'

export const ProjectModal = ({ project, className }: { project: Project; className?: string }) => {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <div
          className={`rounded-5/4 relative overflow-hidden border shadow-md md:basis-1/2 ${className}`.trim()}
        >
          <img
            src={project.metadata.primary_image.src}
            alt={project.metadata.primary_image.alt}
            className="aspect-2/1 size-full object-cover object-top-left md:aspect-video"
          />
          <div className="bg-background/60 absolute inset-0 cursor-pointer content-center opacity-0 backdrop-blur-xs transition-opacity duration-300 hover:opacity-100 has-[button:focus]:opacity-100">
            <Button size="icon-xl" variant="ghost" className="mx-auto flex w-fit">
              <MediaImageList />
              <span className="sr-only">{project.name}</span>
            </Button>
          </div>
        </div>
      </Modal.Trigger>

      <Modal.Content>
        <Carousel
          opts={{
            loop: true,
            align: 'center',
          }}
        >
          <CarouselContent className="max-h-[70dvh] cursor-grab px-4 active:cursor-grabbing lg:max-h-[60dvh]">
            {project.metadata.images.map(({ src, alt }, i) => (
              <CarouselItem key={i} className="relative basis-1/1">
                <img className="mx-auto h-full object-contain" src={src} alt={alt} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="top-full left-4 mt-4 translate-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2"
            size="icon-xl"
          />
          <CarouselNext
            className="top-full right-4 mt-4 translate-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2"
            size="icon-xl"
          />
        </Carousel>
      </Modal.Content>
    </Modal>
  )
}
