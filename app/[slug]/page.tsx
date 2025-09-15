import { notFound } from 'next/navigation';
import { ComponentType } from 'react';

// Define the available routes and their corresponding components
const routes: Record<string, () => Promise<{ default: ComponentType }>> = {
    'about': () => import('../routes/about'),
    'faq': () => import('../routes/faq'),
    // Add other routes here as needed
    // 'events': () => import('../routes/events'),
    // 'contact': () => import('../routes/contact'),
};

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function DynamicPage({ params }: PageProps) {
    const { slug } = await params;

    // Check if the route exists
    if (!routes[slug]) {
        notFound();
    }

    try {
        // Dynamically import the component
        const Component = (await routes[slug]()).default;
        return <Component />;
    } catch (error) {
        console.error(`Error loading component for slug: ${slug}`, error);
        notFound();
    }
}

// Generate static params for known routes (optional, for better performance)
export function generateStaticParams() {
    return Object.keys(routes).map((slug) => ({
        slug,
    }));
}