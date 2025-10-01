import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  description: string;
  image: string;
  specs: {
    motor: string;
    battery: string;
    range: string;
    topSpeed: string;
    weight: string;
    frameSize: string;
  };
  features: string[];
}

const products: Record<string, Product> = {
  "sss-e-power-l6": {
    id: "sss-e-power-l6",
    name: "SSS Motors E-Power L6 Pro Electric Scooter",
    price: "₹25,999",
    priceNumber: 25999,
    description: "SSS Motors E-Power L6 Pro Electric Scooter with removable Li-Ion battery. Features high-performance 250W motor, dual disc brakes, and front suspension. Premium SSS Motors quality with 1 year warranty.",
    image: "/ac/a.jpg",
    specs: {
      motor: "250W High-Performance Motor",
      battery: "Removable Li-Ion Battery",
      range: "Up to 25 km",
      topSpeed: "25 kmph",
      weight: "22 kg",
      frameSize: "19 Inch"
    },
    features: [
      "SSS Motors premium quality",
      "Removable Li-Ion battery",
      "Dual disc brakes",
      "Front suspension",
      "27.5T wheel size",
      "1 year warranty"
    ]
  },
  "sss-zx-electric": {
    id: "sss-zx-electric",
    name: "SSS Motors ZX Electric Scooter",
    price: "₹35,499",
    priceNumber: 35499,
    description: "SSS Motors ZX Electric Scooter with 10.4Ah battery and advanced features. Premium SSS Motors engineering with front suspension, 250 Watt IP65 BLDC motor, and 2 years battery warranty.",
    image: "/ac/b.jpg",
    specs: {
      motor: "250W IP65 BLDC Motor",
      battery: "10.4Ah Lithium-Ion",
      range: "Up to 50 km",
      topSpeed: "25 kmph",
      weight: "24 kg",
      frameSize: "Standard"
    },
    features: [
      "SSS Motors engineering",
      "10.4Ah high-capacity battery",
      "Advanced front suspension",
      "80mm suspension travel",
      "IP65 rated motor",
      "2 years battery warranty"
    ]
  },
  "sss-plus-ic": {
    id: "sss-plus-ic",
    name: "SSS Motors Plus IC Electric Scooter",
    price: "₹42,495",
    priceNumber: 42495,
    description: "SSS Motors Plus IC Electric Scooter with advanced features and modern design. Perfect for urban commuting with SSS Motors reliability, efficient battery system, and comfortable riding experience.",
    image: "/ac/c.jpg",
    specs: {
      motor: "250W Brushless Motor",
      battery: "Lithium-Ion Battery",
      range: "Up to 40 km",
      topSpeed: "25 kmph",
      weight: "23 kg",
      frameSize: "Standard"
    },
    features: [
      "SSS Motors modern design",
      "Efficient battery system",
      "Comfortable riding position",
      "Urban commuting optimized",
      "Reliable SSS Motors performance",
      "Easy maintenance"
    ]
  },
  "sss-nexus-st": {
    id: "sss-nexus-st",
    name: "SSS Motors Nexus ST High Performance Electric Scooter",
    price: "₹1,24,900",
    priceNumber: 124900,
    description: "SSS Motors Nexus ST High Performance Family Electric Scooter with Portable Charger. Designed by SSS Motors for modern families seeking reliable and efficient electric mobility with premium features and excellent build quality.",
    image: "/ac/d.jpeg",
    specs: {
      motor: "BLDC Hub Motor",
      battery: "Lithium-Ion Battery",
      range: "Up to 100 km",
      topSpeed: "50 kmph",
      weight: "95 kg",
      frameSize: "Standard"
    },
    features: [
      "SSS Motors high performance BLDC motor",
      "Portable charger included",
      "Family-friendly design",
      "Premium SSS Motors build quality",
      "Digital instrument cluster",
      "LED lighting system"
    ]
  },
  "sss-e2-scooter": {
    id: "sss-e2-scooter",
    name: "SSS Motors E2 Low Speed Electric Scooter",
    price: "₹50,099",
    priceNumber: 50099,
    description: "SSS Motors E2 Low Speed Electric Scooter Non RTO with 60-80Km Range. Features red portable lithium battery and charger for convenient charging. Perfect SSS Motors solution for city commuting without registration requirements.",
    image: "/ac/e.jpeg",
    specs: {
      motor: "BLDC Motor",
      battery: "Portable Lithium-Ion",
      range: "60-80 km",
      topSpeed: "25 kmph",
      weight: "75 kg",
      frameSize: "Compact"
    },
    features: [
      "SSS Motors Non RTO design",
      "Portable lithium battery",
      "60-80 km range",
      "Low speed compliance",
      "Removable battery pack",
      "Eco-friendly SSS Motors technology"
    ]
  },
  "sss-single-light": {
    id: "sss-single-light",
    name: "SSS Motors Single Light Electric Scooter",
    price: "₹37,999",
    priceNumber: 37999,
    description: "SSS Motors Single Light Electric Scooter with Lead Acid battery and 25kmph speed, 60-70 Km range. Non RTO compliant SSS Motors electric scooter with portable charger for convenient urban mobility.",
    image: "/ac/f.jpeg",
    specs: {
      motor: "BLDC Motor",
      battery: "Lead Acid Battery",
      range: "60-70 km",
      topSpeed: "25 kmph",
      weight: "80 kg",
      frameSize: "Standard"
    },
    features: [
      "SSS Motors lead acid battery technology",
      "25 kmph speed limit",
      "Non RTO compliance",
      "Portable charger",
      "Single light design",
      "Affordable SSS Motors pricing"
    ]
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? products[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Link to="/bikes" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Bikes
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
                <p className="text-3xl font-bold text-primary">{product.price}</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Contact section for inquiries */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold mb-2">Interested in this product?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Contact our team for more information, pricing details, and availability.
                </p>
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">
                    Contact Us for Details
                  </Button>
                </Link>
              </div>

              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Motor</p>
                    <p className="font-semibold">{product.specs.motor}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Battery</p>
                    <p className="font-semibold">{product.specs.battery}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Range</p>
                    <p className="font-semibold">{product.specs.range}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Top Speed</p>
                    <p className="font-semibold">{product.specs.topSpeed}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Weight</p>
                    <p className="font-semibold">{product.specs.weight}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Frame Sizes</p>
                    <p className="font-semibold">{product.specs.frameSize}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-bold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Complimentary delivery on all orders within the continental US.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-bold mb-2">2-Year Warranty</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive coverage on frame, motor, and battery components.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-bold mb-2">30-Day Returns</h3>
              <p className="text-sm text-muted-foreground">
                Not satisfied? Return within 30 days for a full refund.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
