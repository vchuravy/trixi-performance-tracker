window.BENCHMARK_DATA = {
  "lastUpdate": 1747141917480,
  "repoUrl": "https://github.com/vchuravy/trixi-performance-tracker",
  "entries": {
    "Julia benchmark result": [
      {
        "commit": {
          "author": {
            "name": "Valentin Churavy",
            "username": "vchuravy",
            "email": "v.churavy@gmail.com"
          },
          "committer": {
            "name": "Valentin Churavy",
            "username": "vchuravy",
            "email": "v.churavy@gmail.com"
          },
          "id": "7303e4b4021093917854b24c7b61dc96eed987ce",
          "message": "enable github_token",
          "timestamp": "2025-05-13T12:58:43Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/7303e4b4021093917854b24c7b61dc96eed987ce"
        },
        "date": 1747141917094,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4730.142857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13676,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6884.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3335,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 14938,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15619,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8863.333333333334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 8218.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 11872,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 32881,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 8195.333333333334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 5295,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1843.4,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3063.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3209.75,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1597,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}