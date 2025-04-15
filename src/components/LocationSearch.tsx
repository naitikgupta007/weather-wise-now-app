
import React, { useState, useEffect } from "react";
import { Search, X, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LocationSearchResult } from "@/types/weather";
import { searchLocation } from "@/utils/weatherUtils";

interface LocationSearchProps {
  onLocationSelect: (location: string) => void;
  currentLocation: string;
}

const LocationSearch: React.FC<LocationSearchProps> = ({
  onLocationSelect,
  currentLocation
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<LocationSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery.length >= 2) {
        setIsLoading(true);
        try {
          const results = await searchLocation(searchQuery);
          setSearchResults(results);
        } catch (error) {
          console.error("Error searching for location:", error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    // Debounce the search
    const debounceTimeout = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  const handleLocationSelect = (location: LocationSearchResult) => {
    onLocationSelect(location.name);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="location-search mb-6">
      {!isSearchOpen ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-weather-purple" />
            <span className="font-medium">
              {currentLocation}
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-3 text-xs"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={16} className="mr-1" />
            Change Location
          </Button>
        </div>
      ) : (
        <Card className="p-3 animate-fade-in shadow-md">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search 
                size={16} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
              />
              <Input
                className="pl-8"
                placeholder="Search for a city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
            >
              <X size={18} />
            </Button>
          </div>

          {isLoading && searchQuery.length >= 2 && (
            <div className="p-2 text-sm text-muted-foreground">Searching...</div>
          )}

          {searchResults.length > 0 && (
            <div className="mt-2 border-t">
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  className="w-full text-left p-2 hover:bg-secondary flex items-center gap-2 text-sm"
                  onClick={() => handleLocationSelect(result)}
                >
                  <MapPin size={14} />
                  <span>
                    {result.name}, {result.country}
                  </span>
                </button>
              ))}
            </div>
          )}

          {!isLoading && searchQuery.length >= 2 && searchResults.length === 0 && (
            <div className="p-2 text-sm text-muted-foreground">No locations found</div>
          )}
        </Card>
      )}
    </div>
  );
};

export default LocationSearch;
