// /src/components/Rating.tsx
interface RatingProps {
    rating: number; // Note sur 5
  }
  
  export default function Rating({ rating }: RatingProps) {
    const totalStars = 5; // Nombre total d'étoiles
  
    return (
      <div className="flex items-center justify-center">
        {/* Afficher les étoiles */}
        {[...Array(totalStars)].map((_, index) => {
          const starNumber = index + 1;
          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={starNumber <= rating ? "gold" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          );
        })}
      </div>
    );
  }
  