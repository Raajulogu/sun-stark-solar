'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Zap, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useEffect, useState } from 'react'
import { getWorkByUID } from '@/lib/prismic'
import { usePathname } from 'next/navigation'
import { PrismicRichText } from '@prismicio/react'
import ImageSlider from './ImageSlider'

const ProjectDetail = () => {
    const [project, setProject] = useState<any>(null);
    const pathname = usePathname();

    useEffect(() => {
        const fetchData = async () => {
            const paths = pathname.split("/");
            const projectId = paths[paths.length - 1];
            const data = await getWorkByUID(projectId);
            setProject(data);
            console.log(data, "data")
        }
        if (pathname) {
            fetchData();
        }
    }, [pathname])

    return (
        <>
            <Header />
            <main>
                {/* Back Button */}
                <div className="border-b border-border bg-background sticky top-16 z-40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                        <Link href="/works" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Projects</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="border-b border-border bg-gradient-to-b from-background to-card py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                                        {project?.data?.category}
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{project?.data?.title}</h1>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="rounded-lg border border-border bg-gradient-to-br from-accent/20 to-background flex items-center justify-center aspect-video">
                                <ImageSlider
                                    images={
                                        project?.data?.images?.map((item: any) => ({
                                            url: item.image?.url,
                                            alt: project?.data?.title,
                                        })) || []
                                    }
                                />
                            </div>

                            {/* Key Metrics */}
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                                    <div className="text-xs text-muted-foreground">Capacity</div>
                                    <div className="text-2xl font-bold text-accent">{project?.data?.capacity}</div>
                                </div>
                                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                                    <div className="text-xs text-muted-foreground">Location</div>
                                    <div className="flex items-center gap-2 text-lg font-bold text-foreground">
                                        <MapPin className="h-4 w-4" />
                                        {project?.data?.location}
                                    </div>
                                </div>
                                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                                    <div className="text-xs text-muted-foreground">Annual Savings</div>
                                    <div className="flex items-center gap-2 text-lg font-bold text-accent">
                                        <TrendingUp className="h-4 w-4" />
                                        {project?.data?.savings}
                                    </div>
                                </div>
                                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                                    <div className="text-xs text-muted-foreground">Completion</div>
                                    <div className="flex items-center gap-2 text-lg font-bold text-foreground">
                                        <Calendar className="h-4 w-4" />
                                        {project?.data?.completion}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Description */}
                <section className="border-b border-border bg-background py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl space-y-6">
                            <h2 className="text-2xl font-bold text-foreground">Project Overview</h2>
                            {project?.data?.full_desc && <PrismicRichText field={project?.data?.full_desc} />}
                            {/* <p className="text-lg text-muted-foreground leading-relaxed">{project?.data?.full_desc}</p> */}
                        </div>
                    </div>
                </section>

                {/* System Details & Benefits */}
                <section className="border-b border-border bg-card py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">System Specifications</h2>
                                <ul className="space-y-3">
                                    {project?.data?.details.map((detail: any, i: number) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{detail?.details}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Key Benefits</h2>
                                <ul className="space-y-3">
                                    {project?.data?.benefits.map((data: any, i: number) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{data.benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="border-b border-border bg-background py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="space-y-12">
                            <h2 className="text-2xl font-bold text-foreground">Project Timeline</h2>
                            <div className="space-y-4">
                                {project?.data?.timeline.map((item: any, i: number) => (
                                    <div key={i} className="flex gap-6 pb-8 border-b border-border last:border-0">
                                        <div className="flex flex-col items-center">
                                            <div className="h-10 w-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center font-bold text-accent">
                                                {i + 1}
                                            </div>
                                            {i < project?.data?.timeline.length - 1 && (
                                                <div className="w-1 h-12 bg-accent/20 mt-2" />
                                            )}
                                        </div>
                                        <div className="py-1 space-y-1 flex-1">
                                            <h3 className="font-semibold text-foreground">{item.phase}</h3>
                                            <p className="text-sm text-muted-foreground">{item.duration}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="border-b border-border bg-card py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-accent/5 to-background p-8 sm:p-12 text-center space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Ready to Start Your Project?.data?
                            </h2>
                            <p className="mx-auto max-w-2xl text-muted-foreground">
                                Contact our team today to discuss your solar energy needs and get a custom quote.
                            </p>
                            <Button asChild size="lg">
                                <Link href="/contact">Get Free Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
};
export default ProjectDetail;
