"use client";

import React, { useState } from "react";
import { FolderGit, GitCommit, LayoutGrid, Star, ArrowUpRight, Info } from "lucide-react";

export default function GithubActivity() {
  const [repoCount, setRepoCount] = useState<string>("28");
  const [commitCount, setCommitCount] = useState<string>("146");
  const [projectCount, setProjectCount] = useState<string>("7");
  const [starCount, setStarCount] = useState<string>("2.5k+");

  React.useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const cachedData = localStorage.getItem("devjam_github_stats");
        const cachedTime = localStorage.getItem("devjam_github_stats_time");
        const cacheDuration = 15 * 60 * 1000; // 15 minutes cache

        if (cachedData && cachedTime && (Date.now() - parseInt(cachedTime, 10) < cacheDuration)) {
          const parsed = JSON.parse(cachedData);
          setRepoCount(parsed.repos);
          setCommitCount(parsed.commits);
          setStarCount(parsed.stars);
          setProjectCount(parsed.projects);
          return;
        }

        // Fetch user basic info
        const userRes = await fetch("https://api.github.com/users/devJam2026");
        if (!userRes.ok) throw new Error("Failed to fetch user profile");
        const userData = await userRes.json();
        const reposCountVal = String(userData.public_repos);

        // Fetch repos for stars
        const reposRes = await fetch("https://api.github.com/users/devJam2026/repos?per_page=100");
        let starsCountVal = "0";
        let actualProjects = "6";
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          const totalStars = reposData.reduce((acc: number, repo: { stargazers_count?: number }) => acc + (repo.stargazers_count || 0), 0);
          starsCountVal = String(totalStars);
          actualProjects = String(reposData.length);
        }

        // Fetch commits in last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const dateStr = thirtyDaysAgo.toISOString().split("T")[0];
        
        const commitsRes = await fetch(
          `https://api.github.com/search/commits?q=author:devJam2026+author-date:>${dateStr}`,
          {
            headers: {
              Accept: "application/vnd.github.cloak-preview",
            },
          }
        );
        let commitsCountVal = "36";
        if (commitsRes.ok) {
          const commitsData = await commitsRes.json();
          commitsCountVal = String(commitsData.total_count);
        } else {
          // Fallback search
          const fallbackRes = await fetch("https://api.github.com/search/commits?q=author:devJam2026", {
            headers: {
              Accept: "application/vnd.github.cloak-preview",
            },
          });
          if (fallbackRes.ok) {
            const fallbackData = await fallbackRes.json();
            commitsCountVal = String(fallbackData.total_count);
          }
        }

        const finalStats = {
          repos: reposCountVal,
          commits: commitsCountVal,
          stars: starsCountVal,
          projects: actualProjects,
        };

        localStorage.setItem("devjam_github_stats", JSON.stringify(finalStats));
        localStorage.setItem("devjam_github_stats_time", String(Date.now()));

        setRepoCount(finalStats.repos);
        setCommitCount(finalStats.commits);
        setStarCount(finalStats.stars);
        setProjectCount(finalStats.projects);
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
      }
    }

    fetchGitHubStats();
  }, []);

  const stats = [
    { label: "Repositories", value: repoCount, icon: FolderGit, color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
    { label: "Commits (30 days)", value: commitCount, icon: GitCommit, color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
    { label: "Projects", value: projectCount, icon: LayoutGrid, color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
    { label: "Stars", value: starCount, icon: Star, color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
  ];

  interface ContributionCell {
    count: number;
    date: string;
    level: number;
  }

  const weeksCount = 28;
  const daysInWeek = 7;

  // Seeding deterministic realistic values for SSR/Hydration matching
  const defaultGrid: ContributionCell[][] = [];
  const seedList = [
    0,1,0,2,3,0,0, 1,2,0,3,4,1,0, 0,0,1,2,3,0,1, 2,3,1,4,0,2,0,
    0,1,2,2,3,0,0, 2,0,1,3,2,1,0, 1,1,2,3,4,0,0, 0,2,3,1,0,2,0,
    1,2,3,0,2,1,0, 0,1,2,3,4,1,0, 2,2,3,4,0,1,0, 1,0,2,3,1,0,0,
    0,1,1,2,3,0,0, 1,3,2,4,1,0,0, 0,2,3,1,2,1,0, 2,3,1,4,0,2,1,
    0,0,1,2,3,0,0, 2,2,1,3,4,1,0, 1,1,2,3,0,0,0, 0,2,3,1,2,1,0,
    1,2,0,3,2,1,0, 0,1,2,4,3,1,0, 2,2,3,4,1,0,0, 1,0,2,3,2,1,0,
    0,1,1,2,3,0,0, 1,2,2,3,4,1,0, 0,2,3,1,0,1,0, 2,3,1,4,2,2,0
  ];

  for (let w = 0; w < weeksCount; w++) {
    const weekDays: ContributionCell[] = [];
    for (let d = 0; d < daysInWeek; d++) {
      const idx = (w * daysInWeek + d) % seedList.length;
      const level = seedList[idx];
      const count = level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 6 : 12;
      
      const mockDate = new Date();
      mockDate.setDate(mockDate.getDate() - ((weeksCount - w - 1) * 7 + (6 - d)));
      const dateString = mockDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      
      weekDays.push({ count, date: dateString, level });
    }
    defaultGrid.push(weekDays);
  }

  const [grid, setGrid] = useState<ContributionCell[][]>(defaultGrid);
  const [hoverDetail, setHoverDetail] = useState<{ count: number; dateString: string } | null>(null);

  // Fetch real-time contributions grid on client mount
  React.useEffect(() => {
    async function fetchContributionsMap() {
      try {
        const cachedMap = localStorage.getItem("devjam_contributions_map");
        const cachedTime = localStorage.getItem("devjam_contributions_map_time");
        const cacheDuration = 15 * 60 * 1000; // 15 minutes cache

        if (cachedMap && cachedTime && (Date.now() - parseInt(cachedTime, 10) < cacheDuration)) {
          setGrid(JSON.parse(cachedMap));
          return;
        }

        const res = await fetch("https://github-contributions-api.deno.dev/devJam2026.json");
        if (!res.ok) throw new Error("Failed to fetch contribution map");
        const data = await res.json();

        if (data && Array.isArray(data.contributions) && data.contributions.length > 0) {
          const apiWeeks = data.contributions;
          const selectedWeeks = apiWeeks.slice(-28); // last 28 weeks

          interface APIDay {
            date: string;
            contributionCount: number;
            contributionLevel: string;
          }

          const newGrid = selectedWeeks.map((week: APIDay[]) => {
            return week.map((day: APIDay) => {
              let level = 0;
              switch (day.contributionLevel) {
                case "NONE": level = 0; break;
                case "FIRST_QUARTILE": level = 1; break;
                case "SECOND_QUARTILE": level = 2; break;
                case "THIRD_QUARTILE": level = 3; break;
                case "FOURTH_QUARTILE": level = 4; break;
                default: level = 0;
              }

              const d = new Date(day.date);
              // Avoid timezone offset issue when displaying date
              const formattedDate = new Date(d.getTime() + d.getTimezoneOffset() * 60000).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              });

              return {
                count: day.contributionCount || 0,
                date: formattedDate,
                level: level
              };
            });
          });

          localStorage.setItem("devjam_contributions_map", JSON.stringify(newGrid));
          localStorage.setItem("devjam_contributions_map_time", String(Date.now()));
          setGrid(newGrid);
        }
      } catch (err) {
        console.error("Error fetching contributions map:", err);
      }
    }

    fetchContributionsMap();
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 0: return "bg-slate-100 dark:bg-gray-900 border-slate-200 dark:border-gray-950"; 
      case 1: return "bg-cyan-950/20 border-cyan-900/10"; 
      case 2: return "bg-cyan-800/40 border-cyan-700/20"; 
      case 3: return "bg-cyan-600/65 border-cyan-500/30"; 
      case 4: return "bg-cyan-400 border-cyan-300/30 shadow-sm shadow-cyan-400/15 animate-pulse-slow"; 
      default: return "bg-slate-100 dark:bg-gray-900";
    }
  };

  const getMonthsHeader = (currentGrid: ContributionCell[][]) => {
    const list: string[] = [];
    if (!currentGrid || currentGrid.length === 0) return list;
    
    const step = Math.floor(currentGrid.length / 7);
    for (let i = 0; i < 7; i++) {
      const colIdx = Math.min(i * step, currentGrid.length - 1);
      const week = currentGrid[colIdx];
      const cell = week && week[0];
      if (cell && cell.date) {
        const month = cell.date.split(" ")[0];
        list.push(month);
      }
    }
    while (list.length < 7) list.push("");
    return list;
  };

  const months = getMonthsHeader(grid);

  return (
    <div id="activity" className="w-full flex flex-col scroll-mt-20">
      
      <div className="premium-card rounded-2xl p-6 md:p-8">
        
        {/* Header inside Panel */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-card-border pb-6 mb-8 gap-4">
          <div>
            <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase">
              DEVJAM REPOSITORY ACTIVITY
            </h3>
            <span className="text-xs text-text-muted">
              Dynamic tracking on <a href="https://github.com/devJam2026" target="_blank" rel="noopener noreferrer" className="text-cyan-500 dark:text-cyan-400 hover:underline font-bold">GitHub</a>
            </span>
          </div>
          <a
            href="https://github.com/devJam2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-card-border bg-card-bg px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-background transition-all duration-200"
          >
            View on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-xl border border-card-border bg-card-bg/50 p-4 transition-colors"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${stat.color} shadow-sm`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-foreground leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-text-muted font-bold uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contribution Map Container with horizontal scrolling on mobile */}
        <div className="border border-card-border bg-background/40 rounded-xl p-5 md:p-6 overflow-x-auto w-full scrollbar-thin">
          
          <div className="min-w-[620px]">
            {/* Months Header row */}
            <div className="flex justify-between pl-8 pr-4 mb-3.5 text-[10px] font-mono font-semibold text-text-muted">
              {months.map((m, idx) => (
                <span key={idx} className="w-16 text-center">{m}</span>
              ))}
            </div>

            {/* Days grid row layout */}
            <div className="flex gap-2.5 relative">
              {/* Day names list (Y Axis) */}
              <div className="flex flex-col justify-between py-1 text-[8px] sm:text-[9px] font-mono font-bold text-text-muted w-6">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Heatmap Matrix columns */}
              <div className="flex-1 flex gap-1 justify-between">
                {grid.map((week, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-1">
                    {week.map((cell, rowIdx) => (
                      <div
                        key={rowIdx}
                        onMouseEnter={() => setHoverDetail({ count: cell.count, dateString: cell.date })}
                        onMouseLeave={() => setHoverDetail(null)}
                        className={`h-2.5 w-2.5 rounded-sm border-[0.5px] transition-colors duration-150 cursor-pointer ${getCellColor(cell.level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Heatmap Footer Legend and details */}
            <div className="mt-6 pt-4 border-t border-card-border flex items-center justify-between text-[10px] font-mono text-text-muted gap-4">
              <div className="flex items-center gap-1.5 shrink-0">
                <span>Less</span>
                <div className="h-2.5 w-2.5 rounded-sm border-[0.5px] bg-slate-100 dark:bg-gray-900 border-slate-200 dark:border-gray-950" />
                <div className="h-2.5 w-2.5 rounded-sm border-[0.5px] bg-cyan-950/20 border-cyan-900/10" />
                <div className="h-2.5 w-2.5 rounded-sm border-[0.5px] bg-cyan-800/40 border-cyan-700/20" />
                <div className="h-2.5 w-2.5 rounded-sm border-[0.5px] bg-cyan-600/65 border-cyan-500/30" />
                <div className="h-2.5 w-2.5 rounded-sm border-[0.5px] bg-cyan-400 border-cyan-300/30" />
                <span>More</span>
              </div>

              <div className="min-h-4 text-[10px] text-text-muted flex items-center gap-1.5">
                {hoverDetail ? (
                  <>
                    <Info className="h-3.5 w-3.5 text-orange-500" />
                    <span>
                      {hoverDetail.count === 0 ? "No contributions" : `${hoverDetail.count} contributions`} on {hoverDetail.dateString}
                    </span>
                  </>
                ) : (
                  <span>Hover cells for activity details</span>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
