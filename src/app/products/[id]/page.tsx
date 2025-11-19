import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';

// Mock data for demonstration - in a real app this would come from an API or database
const getProductData = (id: string) => {
    const products: Record<string, any> = {
        'pressure-pipes': {
            title: 'Pressure Pipes',
            description: 'High-performance uPVC pipes designed for potable water supply and distribution networks. Manufactured to meet international standards for safety and durability.',
            features: [
                'Lead-free and non-toxic material',
                'High pressure resistance',
                'Corrosion and chemical resistant',
                'Smooth inner surface for better flow',
                'Easy installation with solvent cement'
            ],
            specs: [
                { label: 'Material', value: 'Unplasticized Polyvinyl Chloride (uPVC)' },
                { label: 'Standard', value: 'ASTM D1785 / IS 4985' },
                { label: 'Sizes', value: '20mm to 315mm' },
                { label: 'Pressure Class', value: 'Class 1 to Class 6' },
                { label: 'Length', value: '6 meters' }
            ]
        },
        'drainage-systems': {
            title: 'Drainage Systems',
            description: 'Comprehensive SWR (Soil, Waste, and Rain) piping system for efficient waste water management in residential and commercial buildings.',
            features: [
                'UV stabilized for outdoor use',
                'Leak-proof ring fit joints',
                'High impact strength',
                'Chemical and rodent resistant',
                'Maintenance free'
            ],
            specs: [
                { label: 'Material', value: 'uPVC' },
                { label: 'Standard', value: 'IS 13592' },
                { label: 'Sizes', value: '75mm to 160mm' },
                { label: 'Types', value: 'Type A (Ventilation) & Type B (Soil/Waste)' },
                { label: 'Joint', value: 'Rubber Ring / Solvent Cement' }
            ]
        },
        'electrical': {
            title: 'Electrical Conduits',
            description: 'Flame retardant low smoke (FRLS) conduit pipes ensuring safety and protection for electrical wiring in buildings.',
            features: [
                'Fire retardant properties',
                'High compression strength',
                'Non-conductive material',
                'Easy wire pulling',
                'Durable and long-lasting'
            ],
            specs: [
                { label: 'Material', value: 'uPVC' },
                { label: 'Standard', value: 'IS 9537 Part 3' },
                { label: 'Sizes', value: '20mm to 50mm' },
                { label: 'Mechanical Strength', value: 'Light, Medium, Heavy' },
                { label: 'Color', value: 'Black, White, Grey' }
            ]
        }
    };

    return products[id] || {
        title: 'Product Not Found',
        description: 'The requested product category could not be found.',
        features: [],
        specs: []
    };
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = getProductData(params.id);

    return (
        <div className="min-h-screen bg-neutral-clean">
            {/* Header */}
            <section className="bg-industrial-slate text-white py-16">
                <Container>
                    <div className="mb-6">
                        <Link href="/products" className="text-neutral-light hover:text-decos-gold transition-colors text-sm font-medium">
                            ← Back to Products
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
                    <p className="text-xl text-neutral-light max-w-3xl">
                        {product.description}
                    </p>
                </Container>
            </section>

            {/* Content */}
            <section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Info */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Features */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-neutral-charcoal">Key Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {product.features.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-start">
                                            <span className="text-decos-gold mr-3 text-lg">✓</span>
                                            <span className="text-neutral-steel">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Specifications */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-neutral-charcoal">Technical Specifications</h2>
                                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-neutral-soft">
                                    <table className="w-full">
                                        <tbody className="divide-y divide-neutral-soft">
                                            {product.specs.map((spec: any, idx: number) => (
                                                <tr key={idx} className="hover:bg-neutral-clean/50">
                                                    <td className="py-4 px-6 font-medium text-neutral-charcoal w-1/3">{spec.label}</td>
                                                    <td className="py-4 px-6 text-neutral-steel">{spec.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <Card className="bg-white border-t-4 border-t-decos-gold">
                                <CardBody>
                                    <h3 className="text-xl font-bold mb-4">Interested in this product?</h3>
                                    <p className="text-neutral-steel mb-6">
                                        Contact our sales team for pricing, availability, and technical support.
                                    </p>
                                    <div className="space-y-4">
                                        <Link href="/contact" className="block">
                                            <Button className="w-full">Request Quote</Button>
                                        </Link>
                                        <Link href="/contact" className="block">
                                            <Button variant="outline" className="w-full">Contact Sales</Button>
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <h3 className="text-lg font-bold mb-4">Downloads</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <a href="#" className="flex items-center text-technical-blue hover:text-technical-blue-dark transition-colors">
                                                <span className="mr-2">📄</span> Product Catalog (PDF)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-technical-blue hover:text-technical-blue-dark transition-colors">
                                                <span className="mr-2">📄</span> Technical Data Sheet (PDF)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-technical-blue hover:text-technical-blue-dark transition-colors">
                                                <span className="mr-2">📄</span> Installation Guide (PDF)
                                            </a>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
