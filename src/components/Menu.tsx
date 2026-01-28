import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuItems } from "@/data/menu";

// Define categories based on the new data structure
const categories = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'non-coffee', label: 'Non-Coffee' },
  { id: 'refresher', label: 'Refresher' },
  { id: 'food', label: 'Foods' }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">Our Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of signature coffee, refreshers, and artisanal pastries.
          </p>
        </div>

        <Tabs defaultValue="coffee" className="w-full">
          <div className="flex justify-center mb-10 overflow-x-auto pb-4 md:pb-0" data-aos="fade-up" data-aos-delay="100">
            <TabsList className="h-auto p-1 bg-background rounded-full border shadow-sm flex-nowrap md:flex-wrap">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-full px-6 py-2.5 text-sm font-medium whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0 animate-in fade-in-50 duration-500 slide-in-from-bottom-2">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {menuItems.filter(item => item.category === cat.id).map((item) => (
                  <Card key={item.id} className="group border-none shadow-sm hover:shadow-md transition-all overflow-hidden bg-card rounded-2xl h-full flex flex-col">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:rotate-1"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted">
                          No Image
                        </div>
                      )}
                      {item.popular && (
                        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-none px-2 py-0.5 text-xs font-semibold shadow-sm z-10">
                          Best Seller
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-4 flex flex-col flex-1">
                      <div className="flex-1 mb-3">
                        <h3 className="font-bold text-foreground line-clamp-1 mb-1 text-base md:text-lg" title={item.name}>{item.name}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-3 border-t border-border/50">
                        <span className="font-bold text-lg text-primary block">
                          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
