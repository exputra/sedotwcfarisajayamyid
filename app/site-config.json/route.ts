import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export function GET() {
	return Response.json(siteConfig);
}