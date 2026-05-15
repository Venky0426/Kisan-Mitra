import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Sprout, 
  AlertTriangle, 
  Calendar,
  Plus,
  CloudRain,
  Sun,
  Droplets
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Data for charts
  const monthlyExpenses = [
    { month: 'Jan', amount: 15000 },
    { month: 'Feb', amount: 18000 },
    { month: 'Mar', amount: 22000 },
    { month: 'Apr', amount: 19000 },
    { month: 'May', amount: 25000 },
    { month: 'Jun', amount: 28000 },
  ];

  const incomeData = [
    { month: 'Jan', income: 35000, expenses: 15000 },
    { month: 'Feb', income: 40000, expenses: 18000 },
    { month: 'Mar', income: 45000, expenses: 22000 },
    { month: 'Apr', income: 38000, expenses: 19000 },
    { month: 'May', income: 52000, expenses: 25000 },
    { month: 'Jun', income: 60000, expenses: 28000 },
  ];

  const expenseBreakdown = [
    { name: 'Seeds', value: 8000, color: '#16a34a' },
    { name: 'Fertilizers', value: 12000, color: '#84cc16' },
    { name: 'Pesticides', value: 5000, color: '#eab308' },
    { name: 'Labor', value: 15000, color: '#f97316' },
    { name: 'Irrigation', value: 6000, color: '#3b82f6' },
    { name: 'Others', value: 4000, color: '#8b5cf6' },
  ];

  const yieldData = [
    { season: 'Kharif 2023', wheat: 25, rice: 30, cotton: 18 },
    { season: 'Rabi 2023-24', wheat: 28, rice: 0, cotton: 0 },
    { season: 'Kharif 2024', wheat: 0, rice: 32, cotton: 20 },
  ];

  const upcomingTasks = [
    { date: '15 Nov', task: 'Apply fertilizer to wheat crop', status: 'pending' },
    { date: '18 Nov', task: 'Pest inspection for cotton field', status: 'pending' },
    { date: '20 Nov', task: 'Irrigation system maintenance', status: 'upcoming' },
    { date: '25 Nov', task: 'Harvest tomato crop', status: 'upcoming' },
  ];

  const recentExpenses = [
    { date: '10 Nov', category: 'Seeds', item: 'Wheat Seeds - 50kg', amount: '₹3,500' },
    { date: '12 Nov', category: 'Fertilizer', item: 'Urea - 100kg', amount: '₹2,400' },
    { date: '14 Nov', category: 'Labor', item: 'Harvesting labor (5 workers)', amount: '₹5,000' },
    { date: '15 Nov', category: 'Pesticide', item: 'Organic pesticide spray', amount: '₹1,200' },
  ];

  const cropPlans = [
    { crop: 'Wheat', area: '5 acres', sowingDate: '15 Oct 2024', harvestDate: '15 Mar 2025', status: 'In Progress' },
    { crop: 'Cotton', area: '3 acres', sowingDate: '20 May 2024', harvestDate: '20 Oct 2024', status: 'Completed' },
    { crop: 'Rice', area: '4 acres', sowingDate: '1 Jun 2024', harvestDate: '1 Nov 2024', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-gray-800 mb-2">Kisan Notebook Dashboard</h1>
          <p className="text-xl text-gray-600">Track your farm activities, expenses, and income</p>
        </div>

        {/* Overview Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-8 h-8" />
                <TrendingUp className="w-5 h-5" />
              </div>
              <p className="text-green-100 text-sm mb-1">Total Income (6 months)</p>
              <p className="text-3xl">₹2,70,000</p>
              <p className="text-green-100 text-xs mt-2">+15% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingDown className="w-8 h-8" />
                <AlertTriangle className="w-5 h-5" />
              </div>
              <p className="text-red-100 text-sm mb-1">Total Expenses (6 months)</p>
              <p className="text-3xl">₹1,27,000</p>
              <p className="text-red-100 text-xs mt-2">+8% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Sprout className="w-8 h-8" />
                <TrendingUp className="w-5 h-5" />
              </div>
              <p className="text-blue-100 text-sm mb-1">Net Profit (6 months)</p>
              <p className="text-3xl">₹1,43,000</p>
              <p className="text-blue-100 text-xs mt-2">+22% from last period</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="w-8 h-8" />
                <Badge className="bg-white/20 text-white">4</Badge>
              </div>
              <p className="text-yellow-100 text-sm mb-1">Upcoming Tasks</p>
              <p className="text-3xl">This Week</p>
              <p className="text-yellow-100 text-xs mt-2">2 pending, 2 scheduled</p>
            </CardContent>
          </Card>
        </div>

        {/* Weather Widget */}
        <Card className="mb-8 bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Sun className="w-16 h-16" />
                <div>
                  <p className="text-sm text-cyan-100">Today's Weather</p>
                  <p className="text-4xl">28°C</p>
                  <p className="text-cyan-100">Partly Cloudy</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex items-center gap-2">
                  <CloudRain className="w-8 h-8" />
                  <div>
                    <p className="text-xs text-cyan-100">Rainfall</p>
                    <p className="text-lg">20%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-8 h-8" />
                  <div>
                    <p className="text-xs text-cyan-100">Humidity</p>
                    <p className="text-lg">65%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8" />
                  <div>
                    <p className="text-xs text-cyan-100">Disease Risk</p>
                    <p className="text-lg">Low</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="crops">Crop Plans</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Income vs Expenses */}
              <Card>
                <CardHeader>
                  <CardTitle>Income vs Expenses</CardTitle>
                  <CardDescription>Monthly comparison for last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={incomeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="income" fill="#16a34a" name="Income" />
                      <Bar dataKey="expenses" fill="#dc2626" name="Expenses" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Expense Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Expense Breakdown</CardTitle>
                  <CardDescription>Category-wise expenses this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={expenseBreakdown}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {expenseBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-green-500 text-white flex flex-col items-center justify-center">
                          <span className="text-xs">{task.date.split(' ')[0]}</span>
                          <span className="text-xs">{task.date.split(' ')[1]}</span>
                        </div>
                        <div>
                          <p className="text-gray-800">{task.task}</p>
                          <Badge variant="outline" className="mt-1">
                            {task.status}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Mark Done</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Expenses Tab */}
          <TabsContent value="expenses" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Monthly Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Expense Trend</CardTitle>
                  <CardDescription>Track your spending over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyExpenses}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="amount" stroke="#dc2626" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Add Expense Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Expense</CardTitle>
                  <CardDescription>Record your farm expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">Category</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option>Seeds</option>
                        <option>Fertilizers</option>
                        <option>Pesticides</option>
                        <option>Labor</option>
                        <option>Irrigation</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">Description</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g., Wheat seeds 50kg" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">Amount (₹)</label>
                      <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="0" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">Date</label>
                      <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Expense
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Expenses */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentExpenses.map((expense, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                          <DollarSign className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-gray-800">{expense.item}</p>
                          <p className="text-xs text-gray-500">{expense.date} • {expense.category}</p>
                        </div>
                      </div>
                      <p className="text-red-600">{expense.amount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Crop Plans Tab */}
          <TabsContent value="crops" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Active Crop Plans</CardTitle>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Crop Plan
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cropPlans.map((plan, idx) => (
                    <div key={idx} className="p-4 border-2 border-green-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center">
                            <Sprout className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg text-gray-800">{plan.crop}</h3>
                            <p className="text-sm text-gray-600">{plan.area}</p>
                          </div>
                        </div>
                        <Badge className={plan.status === 'Completed' ? 'bg-green-600' : 'bg-blue-600'}>
                          {plan.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Sowing Date</p>
                          <p className="text-gray-800">{plan.sowingDate}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Expected Harvest</p>
                          <p className="text-gray-800">{plan.harvestDate}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Yield Performance Report</CardTitle>
                <CardDescription>Compare crop yields across seasons</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={yieldData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="season" />
                    <YAxis label={{ value: 'Yield (quintals/acre)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="wheat" fill="#f59e0b" name="Wheat" />
                    <Bar dataKey="rice" fill="#16a34a" name="Rice" />
                    <Bar dataKey="cotton" fill="#3b82f6" name="Cotton" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Task Calendar</CardTitle>
                <CardDescription>All your farming activities in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task, idx) => (
                    <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Calendar className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="text-gray-800">{task.task}</p>
                            <p className="text-sm text-gray-500">{task.date}</p>
                          </div>
                        </div>
                        <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
