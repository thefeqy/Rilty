import { usePage } from '@inertiajs/react';
import {Fragment, PropsWithChildren, ReactNode} from 'react';
import {AppSidebar} from "@/Components/app-sidebar";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/Components/ui/sidebar";
import {Separator} from "@/Components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/Components/ui/breadcrumb";
import {BreadcrumbType} from "@/types";
import {ThemeProvider} from "@/Components/theme-provider";
import {ModeToggle} from "@/Components/mode-toggle";

export default function Authenticated({
  header,
  breadcrumbs,
  children,
}: PropsWithChildren<{ header?: ReactNode, breadcrumbs?: BreadcrumbType[] }>) {
    
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <div className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 px-5">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            {breadcrumbs && (
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        <BreadcrumbItem className="hidden md:block">
                                            <BreadcrumbLink href={route('dashboard')}>
                                                Dashboard
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        {breadcrumbs.map((breadcrumb) => (
                                            <Fragment key={breadcrumb.title}>
                                                <BreadcrumbSeparator className="hidden md:block" />
                                                {breadcrumb.link ? (
                                                    <BreadcrumbLink href={breadcrumb.link}>
                                                        {breadcrumb.title}
                                                    </BreadcrumbLink>
                                                ) : (
                                                    <BreadcrumbItem>
                                                        <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                                                    </BreadcrumbItem>
                                                )}
                                            </Fragment>
                                        ))}
                                    </BreadcrumbList>
                                </Breadcrumb>
                            )}
                        </div>
                        <ModeToggle/>
                    </div>

                    {header && (
                        <header className="bg-background shadow">
                            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </header>
                    )}
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
