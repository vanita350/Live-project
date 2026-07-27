import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Star, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewSection = ({ productId }) => {
  const { reviews: allReviews, addReview, getProductReviews, getAverageRating } = useShop();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [sortBy, setSortBy] = useState('recent'); // 'recent', 'helpful', 'highest', 'lowest'
  
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    title: '',
    comment: '',
    verified: false
  });

  const productReviews = getProductReviews(productId);
  const averageRating = getAverageRating(productId);

  const sortedReviews = [...productReviews].sort((a, b) => {
    switch (sortBy) {
      case 'helpful':
        return b.helpful - a.helpful;
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      case 'recent':
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.author.trim() || !formData.comment.trim()) {
      alert('Please fill in all fields');
      return;
    }
    addReview(productId, formData);
    setFormData({
      author: '',
      rating: 5,
      title: '',
      comment: '',
      verified: false
    });
    setShowReviewForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const ratingCounts = {
    5: productReviews.filter(r => r.rating === 5).length,
    4: productReviews.filter(r => r.rating === 4).length,
    3: productReviews.filter(r => r.rating === 3).length,
    2: productReviews.filter(r => r.rating === 2).length,
    1: productReviews.filter(r => r.rating === 1).length,
  };

  return (
    <div className="py-6 border-t border-charcoal-100">
      <h3 className="text-lg font-semibold text-charcoal-950 mb-6">Customer Reviews</h3>

      {/* Review Summary */}
      {productReviews.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-4 bg-beige-100 rounded">
          {/* Average Rating */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-charcoal-950 mb-2">{averageRating}</div>
            <div className="flex text-gold-primary mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(averageRating) ? 'fill-gold-primary' : 'text-gray-200'}`}
                />
              ))}
            </div>
            <p className="text-xs text-charcoal-600">Based on {productReviews.length} reviews</p>
          </div>

          {/* Rating Distribution */}
          <div className="col-span-2 space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-xs text-charcoal-600 w-8">{star} ★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden">
                  <div
                    className="h-full bg-gold-primary transition-all"
                    style={{
                      width: `${productReviews.length > 0 ? (ratingCounts[star] / productReviews.length) * 100 : 0}%`
                    }}
                  />
                </div>
                <span className="text-xs text-charcoal-600 w-8 text-right">{ratingCounts[star]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Write Review Button */}
      {!showReviewForm && (
        <button
          onClick={() => setShowReviewForm(true)}
          className="mb-6 px-4 py-2 border border-charcoal-950 text-charcoal-950 hover:bg-charcoal-950 hover:text-beige-50 font-semibold text-sm rounded transition"
        >
          Write a Review
        </button>
      )}

      {/* Review Form */}
      {showReviewForm && (
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-beige-100 rounded"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="author"
              placeholder="Your Name"
              value={formData.author}
              onChange={handleInputChange}
              required
              className="px-3 py-2 border border-charcoal-200 rounded text-sm focus:outline-none focus:border-gold-primary"
            />
            <div>
              <label className="text-xs font-semibold text-charcoal-950 block mb-2">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                    className="transition-all"
                  >
                    <Star
                      className={`w-6 h-6 cursor-pointer ${
                        star <= formData.rating
                          ? 'fill-gold-primary text-gold-primary'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <input
            type="text"
            name="title"
            placeholder="Review Title (Optional)"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-charcoal-200 rounded text-sm focus:outline-none focus:border-gold-primary mb-4"
          />

          <textarea
            name="comment"
            placeholder="Your Review"
            value={formData.comment}
            onChange={handleInputChange}
            required
            rows="4"
            className="w-full px-3 py-2 border border-charcoal-200 rounded text-sm focus:outline-none focus:border-gold-primary mb-4"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-charcoal-950 text-beige-50 hover:bg-gold-primary hover:text-charcoal-950 font-semibold text-sm rounded transition"
            >
              Submit Review
            </button>
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className="flex-1 px-4 py-2 border border-charcoal-950 text-charcoal-950 hover:bg-charcoal-50 font-semibold text-sm rounded transition"
            >
              Cancel
            </button>
          </div>
        </motion.form>
      )}

      {/* Sort Options */}
      {productReviews.length > 0 && (
        <div className="mb-4">
          <label className="text-xs font-semibold text-charcoal-950 block mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-charcoal-200 rounded text-sm focus:outline-none focus:border-gold-primary"
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedReviews.length > 0 ? (
          sortedReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 border border-charcoal-100 rounded"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-charcoal-950">{review.author}</p>
                  <div className="flex gap-2 items-center">
                    <div className="flex text-gold-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < review.rating ? 'fill-gold-primary text-gold-primary' : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-charcoal-500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>

              {review.title && (
                <p className="font-semibold text-charcoal-950 text-sm mb-1">{review.title}</p>
              )}

              <p className="text-charcoal-700 text-sm mb-3">{review.comment}</p>

              <button className="flex items-center gap-1 text-xs text-charcoal-600 hover:text-gold-primary transition">
                <ThumbsUp className="w-3 h-3" />
                Helpful ({review.helpful})
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-charcoal-600 text-sm">
            {showReviewForm ? 'Be the first to review!' : 'No reviews yet. Be the first to review!'}
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
