import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Ruler, CheckCircle2 } from 'lucide-react';

const sizeCharts = {
  women: [
    { size: 'XS', bust: '32-33', waist: '24-25', hip: '35-36' },
    { size: 'S', bust: '34-35', waist: '26-27', hip: '37-38' },
    { size: 'M', bust: '36-37', waist: '28-29', hip: '39-40' },
    { size: 'L', bust: '38-39', waist: '30-31', hip: '41-42' },
    { size: 'XL', bust: '40-41', waist: '32-33', hip: '43-44' }
  ],
  men: [
    { size: 'S', chest: '34-36', waist: '28-30' },
    { size: 'M', chest: '38-40', waist: '32-34' },
    { size: 'L', chest: '42-44', waist: '36-38' },
    { size: 'XL', chest: '46-48', waist: '40-42' },
    { size: 'XXL', chest: '50-52', waist: '44-46' }
  ],
  kids: [
    { size: '3-4Y', chest: '24', waist: '22' },
    { size: '5-6Y', chest: '26', waist: '23' },
    { size: '7-8Y', chest: '28', waist: '24' },
    { size: '9-10Y', chest: '30', waist: '25' }
  ]
};

const SizeGuideModal = ({ isOpen, onClose, category = 'women', productName }) => {
  const chart = sizeCharts[category] || sizeCharts.women;
  const isWomen = category === 'women';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-3xl bg-beige-50 shadow-2xl border border-charcoal-100 overflow-hidden">
              <div className="flex items-center justify-between border-b border-charcoal-100 px-6 py-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-semibold">Fit guide</p>
                  <h3 className="font-serif text-2xl text-charcoal-950 mt-2">{productName}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="text-charcoal-950 hover:opacity-70 cursor-pointer p-2"
                  aria-label="Close size guide"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 border border-charcoal-200 bg-white">
                    <Ruler className="w-4 h-4 text-gold-primary" />
                  </div>
                  <p className="text-sm text-charcoal-700">
                    Use the chart below to choose your ideal fit.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border border-charcoal-200 text-left">
                    <thead className="bg-charcoal-950 text-beige-50 uppercase tracking-[0.2em] text-[10px]">
                      <tr>
                        <th className="p-3">Size</th>
                        {isWomen ? (
                          <>
                            <th className="p-3">Bust</th>
                            <th className="p-3">Waist</th>
                            <th className="p-3">Hip</th>
                          </>
                        ) : (
                          <>
                            <th className="p-3">Chest</th>
                            <th className="p-3">Waist</th>
                            {category === 'kids' ? null : <th className="p-3">Sleeve</th>}
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody className="text-sm text-charcoal-700">
                      {chart.map((row) => (
                        <tr key={row.size} className="border-t border-charcoal-200">
                          <td className="p-3 font-semibold text-charcoal-950">{row.size}</td>
                          {isWomen ? (
                            <>
                              <td className="p-3">{row.bust}</td>
                              <td className="p-3">{row.waist}</td>
                              <td className="p-3">{row.hip}</td>
                            </>
                          ) : (
                            <>
                              <td className="p-3">{row.chest}</td>
                              <td className="p-3">{row.waist}</td>
                              {category !== 'kids' && <td className="p-3">{row.sleeve || 'Standard'}</td>}
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 border-t border-charcoal-100 pt-6">
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-charcoal-800 font-semibold mb-4">
                    Fit tips
                  </h4>
                  <div className="space-y-3 text-sm text-charcoal-700">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold-primary mt-0.5" />
                      <span>Choose the next size up if you prefer a relaxed silhouette.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold-primary mt-0.5" />
                      <span>For structured jackets, measure across the chest and shoulders for best accuracy.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold-primary mt-0.5" />
                      <span>Still unsure? Our concierge team can help you choose the perfect fit.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SizeGuideModal;
