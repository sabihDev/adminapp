import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSold: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalSold: Number
      }
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalSold: Number
      }
    ]
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat;