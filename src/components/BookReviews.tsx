import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareDot, User, Calendar, Filter, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface Review {
  id: string;
  name: string;
  rating: number;
  type: string;
  typeMr: string;
  date: string;
  comment: string;
  commentMr?: string;
  isCustom?: boolean;
}

const PRESEEDED_REVIEWS: Review[] = [];

export default function BookReviews() {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState<Review[]>([]);
  
  // Form State
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [type, setType] = useState('Dreamer & Reader');
  const [typeMr, setTypeMr] = useState('स्वप्नाळू वाचक');
  
  // Filter/Search states
  const [selectedRating, setSelectedRating] = useState<string>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Initialize and load saved reviews
  useEffect(() => {
    // Clear old test/dummy reviews from local storage so real readers start fresh after deployment
    localStorage.removeItem('kashmir_book_reviews');
    const saved = localStorage.getItem('kashmir_book_reviews_live_v1');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setReviews([...PRESEEDED_REVIEWS, ...parsed]);
      } catch (e) {
        setReviews(PRESEEDED_REVIEWS);
      }
    } else {
      setReviews(PRESEEDED_REVIEWS);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name,
      rating,
      type: type || 'Warm Reader',
      typeMr: typeMr || 'वाचक स्नेही',
      date: new Date().toISOString().split('T')[0],
      comment,
      isCustom: true
    };

    const saved = localStorage.getItem('kashmir_book_reviews_live_v1');
    let customReviews = [];
    if (saved) {
      try {
        customReviews = JSON.parse(saved);
      } catch (e) {
        customReviews = [];
      }
    }
    const updatedCustom = [newReview, ...customReviews];
    localStorage.setItem('kashmir_book_reviews_live_v1', JSON.stringify(updatedCustom));
    
    setReviews([...PRESEEDED_REVIEWS, ...updatedCustom]);
    
    // Clear form
    setName('');
    setComment('');
    setRating(5);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormSubmitted(false);
      setShowForm(false);
    }, 4000);
  };

  // Calculations for stats
  const totalReviews = reviews.length;
  const averageRating = totalReviews === 0 ? '-' : (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
  ).toFixed(1);

  const starCount = (star: number) => reviews.filter((r) => r.rating === star).length;

  const filteredReviews = reviews.filter((r) => {
    if (selectedRating === 'all') return true;
    return r.rating === parseInt(selectedRating);
  });

  return (
    <section id="reviews" className="py-24 px-6 bg-beige-warm relative overflow-hidden">
      {/* Serene organic soft background glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-kashmir-mist/40 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-84 h-84 bg-golden-accent/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-golden-accent flex items-center gap-1.5 font-semibold">
            <MessageSquareDot className="h-4 w-4 text-golden-accent" />
            {t("Readers' Words", "वाचक मनोगत आणि अभिप्राय")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-kashmir-deep">
            {t("Heartfelt Reflections", "वाचकांच्या नजरेतून प्रवास")}
          </h2>
          <div className="w-12 h-[2px] bg-golden-accent/60 my-2" />
          <p className="font-sans text-sm text-kashmir-deep/70 font-light leading-relaxed">
            {t(
              "Here is what other travelers, writers, and dreamers have discovered while reading the lines of Yun Hasee Wadiyaan.",
              "यूँ हसी वादियाँ या पुस्तकाच्या पानापानांमधून फिरताना वाचक, लेखक आणि प्रवाशांना आलेले हळवे अनुभव आणि त्यांच्या भावना."
            )}
          </p>
        </div>

        {/* Layout Grid: Stats & Form on Left/Right, Reviews on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          
          {/* Left Side: Summary Stats & Interactive Form */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick summary stats card */}
            <div className="bg-beige-light border border-kashmir-mist/30 p-8 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-kashmir-light rounded-full filter blur-xl opacity-40 pointer-events-none" />
              
              <div className="flex items-center gap-6">
                <div className="text-left">
                  <span className="text-5xl font-serif font-semibold text-kashmir-deep block leading-none">
                    {averageRating}
                  </span>
                  <span className="text-xs font-mono text-golden-accent uppercase tracking-wider font-semibold mt-2 block">
                    {t("Out of 5 Stars", "५ पैकी मानांकन")}
                  </span>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-5 w-5 ${
                          totalReviews > 0 && star <= Math.round(parseFloat(averageRating))
                            ? 'text-golden-accent fill-golden-accent'
                            : 'text-kashmir-mist'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="font-sans text-xs text-kashmir-deep/60">
                    {totalReviews === 0
                      ? t("Be the first to leave a review!", "पहिला अभिप्राय नोंदवा!")
                      : t(`Based on ${totalReviews} readers reviews`, `एकूण ${totalReviews} वाचकांच्या अभिप्रायावर आधारित`)}
                  </p>
                </div>
              </div>

              {/* Star Progress bar breakdown */}
              <div className="mt-8 pt-6 border-t border-kashmir-mist/20 space-y-3">
                {[5, 4, 3, 2, 1].map((ratingVal) => {
                  const count = starCount(ratingVal);
                  const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                  return (
                    <div key={ratingVal} className="flex items-center gap-3 text-xs text-kashmir-deep/70">
                      <span className="font-mono flex items-center gap-1 w-8">
                        {ratingVal} <Star className="h-3 w-3 text-golden-accent fill-golden-accent inline" />
                      </span>
                      <div className="flex-1 h-2 bg-kashmir-light rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-golden-accent transition-all duration-500" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="font-mono w-6 text-right text-kashmir-deep/50">{count}</span>
                    </div>
                  );
                })}
              </div>

              {/* Toggle Write Review Button */}
              {!showForm && (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full mt-8 py-3.5 px-6 rounded-2xl bg-kashmir-deep text-beige-light hover:bg-kashmir-blue transition-all font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 group shadow-md"
                >
                  <Sparkles className="h-4 w-4 text-golden-accent" />
                  {t("Leave Your Review", "अभिप्राय नोंदवा")}
                </button>
              )}
            </div>

            {/* Live Interactive Form to Write Review */}
            <AnimatePresence mode="wait">
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-beige-light border border-golden-accent/20 p-8 rounded-3xl shadow-md relative"
                >
                  {/* Success Screen Overlay */}
                  {formSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="absolute inset-0 bg-beige-light/95 rounded-3xl z-20 flex flex-col items-center justify-center p-6 text-center"
                    >
                      <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-4 animate-bounce" />
                      <h4 className="font-serif text-2xl font-light text-kashmir-deep">
                        {t("Thank You, Reader!", "मनापासून धन्यवाद!")}
                      </h4>
                      <p className="font-sans text-xs text-kashmir-deep/70 mt-2 max-w-xs leading-relaxed">
                        {t(
                          "Your heartfelt feelings about \"Yun Hasee Wadiyaan\" have been preserved in our visitor logs.",
                          "तुमचा हा सुंदर अभिप्राय 'यूँ हसी वादियाँ' च्या वाचक नोंदवहीत साठवला गेला आहे."
                        )}
                      </p>
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between mb-6 pb-2 border-b border-kashmir-mist/20">
                    <h3 className="font-serif text-lg font-semibold text-kashmir-deep">
                      {t("Write a Review", "अभिप्राय लिहा")}
                    </h3>
                    <button
                      onClick={() => setShowForm(false)}
                      className="text-xs font-sans text-kashmir-deep/50 hover:text-kashmir-deep transition-colors uppercase tracking-widest"
                    >
                      {t("Cancel", "रद्द करा")}
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name input */}
                    <div className="text-left">
                      <label className="block text-xs font-mono uppercase tracking-wider text-kashmir-deep/70 mb-1.5 font-medium">
                        {t("Your Display Name", "तुमचे नाव")} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 h-4 w-4 text-kashmir-deep/40" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t("e.g. Rahul Patil", "उदा. राहुल पाटील")}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-kashmir-mist bg-beige-light/50 focus:border-golden-accent focus:bg-beige-light focus:outline-none transition-all text-sm text-kashmir-deep"
                        />
                      </div>
                    </div>

                    {/* Reader Type Selector */}
                    <div className="text-left">
                      <label className="block text-xs font-mono uppercase tracking-wider text-kashmir-deep/70 mb-1.5 font-medium">
                        {t("Who are you?", "तुमची ओळख?")}
                      </label>
                      <select
                        value={type}
                        onChange={(e) => {
                          const val = e.target.value;
                          setType(val);
                          // Sync simple Marathi type matching
                          if (val === 'Nature Lover') setTypeMr('निसर्ग प्रेमी');
                          else if (val === 'Solo Backpacker') setTypeMr('एकल पर्यटक');
                          else if (val === 'Marathi Reader') setTypeMr('मराठी वाचक');
                          else if (val === 'Poet & Artist') setTypeMr('कवी आणि कलाकार');
                          else setTypeMr('वाचक मित्र');
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-kashmir-mist bg-beige-light/50 focus:border-golden-accent focus:bg-beige-light focus:outline-none transition-all text-sm text-kashmir-deep appearance-none"
                      >
                        <option value="Dreamer & Reader">{t("Dreamer & Reader", "स्वप्नाळू वाचक")}</option>
                        <option value="Nature Lover">{t("Nature Lover", "निसर्ग प्रेमी")}</option>
                        <option value="Solo Backpacker">{t("Solo Backpacker", "एकल पर्यटक")}</option>
                        <option value="Marathi Reader">{t("Marathi Reader", "मराठी वाचक")}</option>
                        <option value="Poet & Artist">{t("Poet & Artist", "कवी आणि कलाकार")}</option>
                      </select>
                    </div>

                    {/* Interactive Clickable Rating Stars */}
                    <div className="text-left">
                      <label className="block text-xs font-mono uppercase tracking-wider text-kashmir-deep/70 mb-1.5 font-medium">
                        {t("Rate the Memoir", "पुस्तकाचे मानांकन")}
                      </label>
                      <div className="flex items-center gap-2 py-1">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const isActive = hoveredRating !== null ? star <= hoveredRating : star <= rating;
                          return (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(null)}
                              className="focus:outline-none transition-transform active:scale-95"
                              title={`${star} Stars`}
                            >
                              <Star
                                className={`h-8 w-8 stroke-[1.5] transition-all duration-150 ${
                                  isActive 
                                    ? 'text-golden-accent fill-golden-accent' 
                                    : 'text-kashmir-mist hover:text-golden-accent/60'
                                }`}
                              />
                            </button>
                          );
                        })}
                        <span className="font-mono text-xs text-golden-accent font-semibold ml-2">
                          {rating} / 5
                        </span>
                      </div>
                    </div>

                    {/* Review comment */}
                    <div className="text-left">
                      <label className="block text-xs font-mono uppercase tracking-wider text-kashmir-deep/70 mb-1.5 font-medium">
                        {t("Your Thoughts", "तुमचा अभिप्राय / ओळी")} <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder={t("How did the book touch you? Write your honest feelings here...", "हे पुस्तक वाचताना तुम्हाला काय भावना जाणवल्या? तुमच्या प्रामाणिक आठवणी आणि ओळी येथे लिहा...")}
                        className="w-full p-4 rounded-xl border border-kashmir-mist bg-beige-light/50 focus:border-golden-accent focus:bg-beige-light focus:outline-none transition-all text-sm text-kashmir-deep leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-golden-accent hover:bg-golden-accent/90 text-kashmir-deep transition-all font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 shadow"
                    >
                      <Send className="h-4 w-4" />
                      {t("Submit Review", "अभिप्राय पाठवा")}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Side: Reviews Stream with Search/Filters */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Filter Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-beige-light border border-kashmir-mist/20 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-kashmir-deep/60 tracking-wider">
                <Filter className="h-4 w-4 text-golden-accent" />
                <span>{t("Filter Reviews By Rating:", "रेटिंगनुसार निवडा:")}</span>
              </div>
              
              <div className="flex items-center gap-2.5 flex-wrap">
                {['all', '5', '4'].map((ratingOpt) => (
                  <button
                    key={ratingOpt}
                    onClick={() => setSelectedRating(ratingOpt)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                      selectedRating === ratingOpt
                        ? 'bg-kashmir-deep text-beige-light border-kashmir-deep shadow-sm'
                        : 'bg-beige-light hover:bg-kashmir-light text-kashmir-deep/70 border-kashmir-mist/30'
                    }`}
                  >
                    {ratingOpt === 'all' 
                      ? t("All Ratings", "सर्व रेटिंग") 
                      : `${ratingOpt} ⭐`}
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews list */}
            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredReviews.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-12 text-center bg-beige-light border border-dashed border-kashmir-mist/40 rounded-3xl"
                  >
                    <p className="font-serif italic text-base text-kashmir-deep/60">
                      {totalReviews === 0
                        ? t("No reviews yet. Be the first reader to share your thoughts after reading!", "अजून कोणताही अभिप्राय नाही. पुस्तक वाचल्यानंतर आपले विचार मांडणारे पहिले वाचक व्हा!")
                        : t("No reviews found for this selection yet.", "या निवडीसाठी अजून कोणताही अभिप्राय नाही.")}
                    </p>
                  </motion.div>
                ) : (
                  filteredReviews.map((review) => {
                    const initials = review.name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2);

                    return (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className={`p-6 sm:p-8 rounded-3xl bg-beige-light border ${
                          review.isCustom ? 'border-golden-accent/30 bg-beige-light' : 'border-kashmir-mist/20'
                        } shadow-sm group hover:border-kashmir-lake/35 transition-all duration-300 relative`}
                      >
                        {review.isCustom && (
                          <span className="absolute top-4 right-4 bg-golden-accent/10 text-golden-accent text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold">
                            {t("New Custom", "नवीन अभिप्राय")}
                          </span>
                        )}

                        <div className="flex items-start gap-4 flex-col sm:flex-row">
                          
                          {/* Round initial avatar */}
                          <div className={`h-11 w-11 rounded-2xl flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                            review.isCustom 
                              ? 'bg-golden-accent/15 text-golden-accent border border-golden-accent/20' 
                              : 'bg-kashmir-light text-kashmir-deep border border-kashmir-mist/20'
                          }`}>
                            {initials || <User className="h-4 w-4" />}
                          </div>

                          <div className="space-y-2 flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div>
                                <h4 className="font-serif text-lg font-bold text-kashmir-deep flex items-center gap-2">
                                  {review.name}
                                </h4>
                                <span className="font-mono text-[10px] text-golden-accent uppercase tracking-widest font-semibold block">
                                  {t(review.type, review.typeMr)}
                                </span>
                              </div>

                              <div className="flex flex-col items-end gap-1.5">
                                <div className="flex gap-0.5">
                                  {[1, 2, 3, 4, 5].map((s) => (
                                    <Star 
                                      key={s} 
                                      className={`h-4 w-4 ${
                                        s <= review.rating 
                                          ? 'text-golden-accent fill-golden-accent' 
                                          : 'text-kashmir-mist'
                                      }`} 
                                    />
                                  ))}
                                </div>
                                <span className="text-[10px] font-mono text-kashmir-deep/45 flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {review.date}
                                </span>
                              </div>
                            </div>

                            <p className="font-sans text-sm text-kashmir-deep/80 leading-relaxed font-light pt-2 select-text">
                              "{t(review.comment, review.commentMr || review.comment)}"
                            </p>

                          </div>

                        </div>

                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
