import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  HStack,
  Progress,
  Checkbox,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { SearchIcon, StarIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function CreatorFilterSidebar(props) {
  const { tableData, onFilterChange } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ratingFilter, setRatingFilter] = useState({ rating4: false, rating3: false, rating2: false, rating1: false });
  const [artworkFilter, setArtworkFilter] = useState({ high: false, medium: false, low: false });
  const [priceFilter, setPriceFilter] = useState({ free: false, paid: false });
  const [levelFilter, setLevelFilter] = useState({ beginner: false, intermediate: false, advanced: false });

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const bgColor = useColorModeValue('white', 'navy.800');
  const hoverBg = useColorModeValue('gray.50', 'whiteAlpha.100');
  const selectedBg = useColorModeValue('brand.50', 'brand.400');

  const categories = [
    { id: "tech", name: "Technology", count: 450 },
    { id: "business", name: "Business", count: 320 },
    { id: "design", name: "Design", count: 280 },
    { id: "marketing", name: "Marketing", count: 195 },
    { id: "data", name: "Data Science", count: 210 },
    { id: "language", name: "Languages", count: 175 }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange({
        type: 'search',
        value: searchQuery
      });
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    if (onFilterChange) {
      onFilterChange({
        type: 'category',
        value: categoryId
      });
    }
  };

  const handleRatingFilterChange = (rating) => {
    setRatingFilter(prev => ({ ...prev, [rating]: !prev[rating] }));
    if (onFilterChange) {
      onFilterChange({
        type: 'rating',
        value: { ...ratingFilter, [rating]: !ratingFilter[rating] }
      });
    }
  };

  const handleArtworkFilterChange = (level) => {
    setArtworkFilter(prev => ({ ...prev, [level]: !prev[level] }));
    if (onFilterChange) {
      onFilterChange({
        type: 'artwork',
        value: { ...artworkFilter, [level]: !artworkFilter[level] }
      });
    }
  };

  const handlePriceFilterChange = (type) => {
    setPriceFilter(prev => ({ ...prev, [type]: !prev[type] }));
    if (onFilterChange) {
      onFilterChange({
        type: 'price',
        value: { ...priceFilter, [type]: !priceFilter[type] }
      });
    }
  };

  const handleLevelFilterChange = (level) => {
    setLevelFilter(prev => ({ ...prev, [level]: !prev[level] }));
    if (onFilterChange) {
      onFilterChange({
        type: 'level',
        value: { ...levelFilter, [level]: !levelFilter[level] }
      });
    }
  };

  const handleApplyFilters = () => {
    if (onFilterChange) {
      onFilterChange({
        type: 'apply',
        filters: {
          search: searchQuery,
          category: selectedCategory,
          rating: ratingFilter,
          artwork: artworkFilter,
          price: priceFilter,
          level: levelFilter
        }
      });
    }
  };

  return (
    <Box
      bg={bgColor}
      borderRadius="20px"
      p="20px"
      boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
      w="100%"
      h="fit-content"
    >
      <VStack spacing="24px" align="stretch">
        {/* Search Section */}
        <Box>
          <Text color={textColor} fontSize="md" fontWeight="600" mb="12px">
            Search Courses
          </Text>
          <form onSubmit={handleSearch}>
            <VStack spacing="8px">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  borderColor={borderColor}
                  _focus={{
                    borderColor: "brand.500",
                    boxShadow: "0 0 0 1px brand.500"
                  }}
                />
              </InputGroup>
              <Button
                type="submit"
                variant="outline"
                size="sm"
                w="100%"
                colorScheme="brand"
              >
                Search
              </Button>
            </VStack>
          </form>
        </Box>

        <Divider borderColor={borderColor} />

        {/* Categories Section */}
        <Box>
          <Text color={textColor} fontSize="md" fontWeight="600" mb="12px">
            Categories
          </Text>
          <VStack spacing="8px">
            {categories.map(category => (
              <Flex
                key={category.id}
                w="100%"
                p="8px"
                borderRadius="8px"
                cursor="pointer"
                transition="all 0.2s"
                bg={selectedCategory === category.id ? selectedBg : "transparent"}
                _hover={{ bg: hoverBg }}
                justify="space-between"
                align="center"
                onClick={() => handleCategoryClick(category.id)}
              >
                <Text
                  color={selectedCategory === category.id ? "brand.500" : textColor}
                  fontSize="sm"
                  fontWeight={selectedCategory === category.id ? "600" : "normal"}
                >
                  {category.name}
                </Text>
                <Text color={textColorSecondary} fontSize="xs">
                  {category.count}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Divider borderColor={borderColor} />

        {/* Price Filter */}
        <Box>
          <Text color={textColor} fontSize="md" fontWeight="600" mb="12px">
            Price
          </Text>
          <VStack spacing="8px" align="start">
            <Checkbox
              isChecked={priceFilter.free}
              onChange={() => handlePriceFilterChange('free')}
              colorScheme="brand"
            >
              <Text fontSize="sm" color={textColor}>Free</Text>
            </Checkbox>
            <Checkbox
              isChecked={priceFilter.paid}
              onChange={() => handlePriceFilterChange('paid')}
              colorScheme="brand"
            >
              <Text fontSize="sm" color={textColor}>Paid</Text>
            </Checkbox>
          </VStack>
        </Box>

        <Divider borderColor={borderColor} />

        {/* Level Filter */}
        <Box>
          <Text color={textColor} fontSize="md" fontWeight="600" mb="12px">
            Level
          </Text>
          <VStack spacing="8px" align="start">
            <Checkbox
              isChecked={levelFilter.beginner}
              onChange={() => handleLevelFilterChange('beginner')}
              colorScheme="brand"
            >
              <Text fontSize="sm" color={textColor}>Beginner</Text>
            </Checkbox>
            <Checkbox
              isChecked={levelFilter.intermediate}
              onChange={() => handleLevelFilterChange('intermediate')}
              colorScheme="brand"
            >
              <Text fontSize="sm" color={textColor}>Intermediate</Text>
            </Checkbox>
            <Checkbox
              isChecked={levelFilter.advanced}
              onChange={() => handleLevelFilterChange('advanced')}
              colorScheme="brand"
            >
              <Text fontSize="sm" color={textColor}>Advanced</Text>
            </Checkbox>
          </VStack>
        </Box>

        <Divider borderColor={borderColor} />

        {/* Artwork Count Filter */}
        <Box>
          <Text color={textColor} fontSize="md" fontWeight="600" mb="12px">
            Artwork Count
          </Text>
          <VStack spacing="8px" align="start">
            <Checkbox
              isChecked={artworkFilter.high}
              onChange={() => handleArtworkFilterChange('high')}
              colorScheme="brand"
            >
              <Text fontSize="sm" color={textColor}>100+ Artworks</Text>
            </Checkbox>
            <Checkbox
              isChecked={artworkFilter.medium}
              onChange={() => handleArtworkFilterChange('medium')}
              colorScheme="brand"
            >
              <Text fontSize="sm" color={textColor}>50-99 Artworks</Text>
            </Checkbox>
            <Checkbox
              isChecked={artworkFilter.low}
              onChange={() => handleArtworkFilterChange('low')}
              colorScheme="brand"
            >
              <Text fontSize="sm" color={textColor}>Under 50 Artworks</Text>
            </Checkbox>
          </VStack>
        </Box>

        <Divider borderColor={borderColor} />

        {/* Rating Filter */}
        <Box>
          <Text color={textColor} fontSize="md" fontWeight="600" mb="12px">
            Rating
          </Text>
          <VStack spacing="8px" align="start">
            {[4, 3, 2, 1].map(rating => (
              <Checkbox
                key={rating}
                isChecked={ratingFilter[`rating${rating}`]}
                onChange={() => handleRatingFilterChange(`rating${rating}`)}
                colorScheme="brand"
              >
                <HStack spacing="4px">
                  {Array(rating).fill(0).map((_, i) => (
                    <StarIcon key={i} w="12px" h="12px" color="yellow.400" />
                  ))}
                  {Array(5 - rating).fill(0).map((_, i) => (
                    <StarIcon key={i} w="12px" h="12px" color="gray.300" />
                  ))}
                  <Text fontSize="sm" color={textColor} ml="8px">
                    {rating}+ stars
                  </Text>
                </HStack>
              </Checkbox>
            ))}
          </VStack>
        </Box>

        <Button
          w="100%"
          colorScheme="brand"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
      </VStack>
    </Box>
  );
}