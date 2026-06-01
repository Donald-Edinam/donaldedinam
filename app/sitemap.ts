import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { writingEntries } from '@/data/writing';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://donaldedinam.me';

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(project.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const writingUrls = writingEntries.map((entry) => ({
        url: `${baseUrl}/writing/${entry.slug}`,
        lastModified: new Date(entry.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const staticLastModified = new Date('2026-06-01');

    return [
        {
            url: baseUrl,
            lastModified: staticLastModified,
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: staticLastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: staticLastModified,
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/writing`,
            lastModified: staticLastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: staticLastModified,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        ...projectUrls,
        ...writingUrls,
    ];
}
