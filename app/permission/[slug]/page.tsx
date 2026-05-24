import { notFound } from "next/navigation";
import { permissionDefinitions } from "../../../lib/i18n";
import { PermissionExplorer } from "./permission-explorer";

interface PermissionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PermissionPage({ params }: PermissionPageProps) {
  const { slug } = await params;
  const permission = permissionDefinitions.find((item) => item.slug === slug);

  if (!permission) {
    notFound();
  }

  return <PermissionExplorer permission={permission} />;
}
