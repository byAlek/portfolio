import { useEffect, useState } from 'preact/hooks'

import { PROJECTS } from '@/constants/projects'
import { useMediaQuery } from '@/lib/hooks'
import type { Project } from '@/types/project'
import type { Translations } from '@/types/translations'
import { NavArrowDown } from 'iconoir-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel'
import { Link } from './ui/link'

export const ProjectsCarousel = ({ t }: { t: Translations }) => {
  const [api, setApi] = useState<CarouselApi>()
  const lg = useMediaQuery('lg')

  useEffect(() => {
    if (!api) return

    const onSettle = () => api.scrollTo(api.selectedScrollSnap())

    api.on('settle', onSettle)

    return () => api.off('settle', onSettle)
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
        align: 'center',

        dragFree: lg,
      }}
      className="max-w-layout mx-auto select-none"
    >
      <div className="mask-r-from-95% mask-l-from-95% lg:mask-r-from-75% lg:mask-l-from-75%">
        <CarouselContent className="cursor-grab active:cursor-grabbing lg:-ml-8 *:lg:pl-8">
          {PROJECTS(t.projects).map((project, i) => (
            <CarouselItem key={i} className="h-full max-h-200 basis-[87%] lg:basis-1/2">
              <Card project={project} />
            </CarouselItem>
          ))}
          {PROJECTS(t.projects).map((project, i) => (
            <CarouselItem key={i} className="h-full max-h-200 basis-[87%] lg:basis-1/2">
              <Card project={project} />
            </CarouselItem>
          ))}
          {PROJECTS(t.projects).map((project, i) => (
            <CarouselItem key={i} className="h-full max-h-200 basis-[87%] lg:basis-1/2">
              <Card project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <CarouselPrevious
        variant="ghost"
        size="icon-xl"
        className="top-1/2 left-4 hidden size-20 translate-0 -translate-y-1/2 *:size-8! lg:inline-flex"
      />
      <CarouselNext
        variant="ghost"
        size="icon-xl"
        className="top-1/2 right-4 hidden size-20 translate-0 -translate-y-1/2 *:size-8! lg:inline-flex"
      />
    </Carousel>
  )

  function Card({ project: { id, name, primary_image, description } }: { project: Project }) {
    return (
      <article className="rounded-5/4 relative overflow-hidden border sm:aspect-10/6">
        <img
          src={primary_image.src}
          alt={name}
          className="absolute inset-0 size-full object-cover object-top-left"
        />
        <footer className="bg-popover/80 text-card-foreground relative inset-0 mt-auto flex h-fit min-h-2/3 flex-col justify-center gap-2 border-l p-4 sm:absolute sm:ml-auto sm:h-auto sm:min-h-auto sm:w-2/3 sm:p-8 lg:p-12">
          <h2 class="title-secondary">{name}</h2>
          <p
            className="line-clamp-3 md:line-clamp-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Link href={`#${id}`} size="sm" className="group relative self-start">
            {t.button.show_more}
            <NavArrowDown className="text-primary group-hover:animate-in group-hover:fade-in-0 group-hover:slide-in-from-top-50 absolute inset-x-0 top-full mx-auto size-4 opacity-0 duration-200 group-hover:opacity-100" />
          </Link>
        </footer>
      </article>
    )
  }
}
