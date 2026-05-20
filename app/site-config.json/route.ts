import { siteConfig } from '@/config/site';

export function GET() {
	return Response.json(siteConfig);
}