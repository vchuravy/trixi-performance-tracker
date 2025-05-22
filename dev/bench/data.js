window.BENCHMARK_DATA = {
  "lastUpdate": 1747932139383,
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
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747151696423,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 408422,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1250694,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6244294.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1286540,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1230315,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 14925926,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13144777,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 995275,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 678361,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9103804,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10225636,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 993423,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4778012.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 60063159,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 78176565.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7307749.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 162042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 171419.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 34424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5153728,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 63406387,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 77467079,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7281444,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 119032,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 433018,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 3978572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 846128,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 790469.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5381979,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 29701714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2718379,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1879.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3108.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3217.125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1571.9,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 178613,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 718370,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2698267,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 603575,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 60853,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 217806,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 802127,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 161061,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4761.714285714285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13696,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6778.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3244.875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1325422.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8835916,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10953521,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2303305.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 351164,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2423089,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2858371,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 618794,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 14959,
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
            "value": 8846.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 7992.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 239236,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 840843.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2695042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 598817,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 232243,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1655788.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 702500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 130052,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 11832,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 32470,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7641,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1145701,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 9179096,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 35032271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3461542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1371519,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 9840725,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35248804,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3425469,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 430773,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 3002570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5656168.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 528657,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 564513,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2714934,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6178859,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1285718,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 820480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5551482,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9738125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 834571.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 73888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 279321,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2520085.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 553432,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 232444,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 810421,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1209625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 248383,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 752684,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4733909,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2487609,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 437756,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1547126,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21432842,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13297123.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1072651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747154464062,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 407844,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1224258.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6200336,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1285608,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1231190.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 14968248.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13062315,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1031012,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 681476,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9079786.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10313085.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 1004552,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4770576,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 60241107,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 77801549,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7292097,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59451,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 162915,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 170440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 34404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5166651.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 63342643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 77970529,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7324661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 118362,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 411651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 3991138,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 846776,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 794949,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5367656,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 29881960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2728848.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1877.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3104.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3179.625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1572.9,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 185938,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 718355,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2702702,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 604903,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 60554,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 219221,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 783998,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 161242,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4717.428571428572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6881,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3356.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1332364,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8832637,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10981410,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2339550,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 352289,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2419684.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2868874,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 621603,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 14928,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15579,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8846.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 7938,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 242083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 848698,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2697880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 595915,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 231233,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1659156,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 707634.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 129783,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 12083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 32651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11391.333333333334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7612.666666666667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1142623.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 9243658,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 35844699,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3449236,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1373801,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 10263673.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35407863,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3454225,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 430942,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 2981294.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5625003,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 522828,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 567863,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2730530,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6207120.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1284614.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 826227,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5510589,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9675788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 941561,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 74479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 282679.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2517992.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 551161,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 233196,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 797424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1188296,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 252212,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 758928,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4749260,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2584121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 432219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1547341,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21501540.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13334013,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1073208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747241094211,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 435222.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1341641,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6666807,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1370124,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1331893,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 15922456,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 15528508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1070826.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 732436,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9743832,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10929230,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 1055744,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 5158336.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 67807569.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 82580575,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7751659.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 62197,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 169468,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 181355.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 36409,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5396098,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 73216976,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 81551896,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7549114,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 122991.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 451283,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 4138796,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 881336,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 801070,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5711481,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 31111114,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2821602,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1990.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3313.75,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3288.625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1664.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 192161,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 772160.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2888968,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 634753,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 63168,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 233679,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 812837,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 166563,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4939.428571428572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 14227,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 7067.2,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3426.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1418485,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9327305,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 11545142,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2418519,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 384062,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2564728.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 3032258,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 658782.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 15680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 16251,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8887,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 8285.75,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 263099.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 923966,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2906471,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 636486,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 249994.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1759992,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 750159,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 136527,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 12243,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 34135,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 12604,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 8687.916666666668,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1229445,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 9409414.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 38692554,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3646015,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1463735.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 10078307,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 37904148,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3616856,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 454969.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 3142122,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5885494,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 564420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 609345,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2884219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6563040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1345428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 866418,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5777089.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 10076833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 887552.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 76183,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 300029,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2648967,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 576363,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 246393,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 844166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1268553,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 264020.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 790817,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 5001778,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2659497,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 449114,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1638483,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 22553565.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 14105903,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1143618,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747327241762,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 404855,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1240413,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6155274,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1285136,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1228740.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 14881515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 12948938.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 998131,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 679306,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9061076.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10209302,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 994774,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4780548,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 59789298.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 78310196,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7261943,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59821,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 162303,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 175407,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 33773,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5136496,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 62579913.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 77538736,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7433094.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 118896.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 412860,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 3989147.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 847851,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 787548.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5392027.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 29785650,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2869970,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1895.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3090.75,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3213.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1714.2,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 179215,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 719521.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2704181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 595710,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 61314,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 217896,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 783761,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 162844,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4751.714285714285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13695,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6776.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3256,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1326652.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8796753,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10872283,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2340377.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 352247,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2408345.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2849774,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 618113,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 15068,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15779,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8966.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 8092,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 241300.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 849424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2698564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 600139,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 231141,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1653723,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 701137,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 130563,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 11862,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 32301,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11501.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7709.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1142721,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 8373299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 35328256,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3434214,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1356840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 9038633.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35085903.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3551449,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 423063.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 3000094,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5618596.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 547080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 573179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2724960,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6146375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1281680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 820991,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5460633,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9701449.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 849093,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 73888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 284240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2514689,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 550836,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 232914,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 801013,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1189756,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 250125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 752760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4733240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2603032.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 431243,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1545405,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21301216,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13197409,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1078978.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747413642559,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 405519,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1243349,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6205321,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1285207,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1229637.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 14969891.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 12998009.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 993750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 680504,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9104528,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10195652,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 984654,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4777741.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 60169072,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 78469470,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7307293,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59441,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 162755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 171311,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 33292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5171234,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 63729412,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 77790096,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7330211,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 119043,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 414206,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 4028214,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 848188.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 797324,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5307570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 30000042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2743510,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1886.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3103.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3197.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1578.9,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 180418,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 720930,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2710345,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 601496,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 60944,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 218900,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 785851,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 163095,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13646,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6840.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3244.875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1320041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8800318,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 11112037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2326377,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 344918,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2418999,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2849619,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 621255,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 15099,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15700,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8850,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 8082.75,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 242334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 849712,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2716248,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 597911,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 232991.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1661022,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 703017,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 130064,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 11852,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 32401,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11561.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7769.583333333334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1149805,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 8989507,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 35112300.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3445813,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1359981,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 9640547,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35200825.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3471802,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 423679.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 2999466,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5616025,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 528910,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 571842,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2714500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6224281,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1289685,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 820183,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5455205,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9734881,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 839535,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 74580,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 277841,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2519130,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 549900.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 232536,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 804899,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1191935,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 247374,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 751338,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4741864,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2498424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 433101.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1553506.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21351346.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13304607.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1069676,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747499963940,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 407381,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1243157,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6198439.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1291653,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1229457,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 14952170.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 12895716,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 995820.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 684709,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9070291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10353937.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 1009312,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4751971,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 59125433,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 78799675.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7439704.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59011,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 167964,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 170549,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 33052,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5140575.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 61921861,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 77666878,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7315958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 118732,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 407221,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 3994574,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 846791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 790980,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5307930,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 29963235,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2751176,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1863.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3125.875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3213.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1579,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 178945,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 720769,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2706752,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 596515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 60433,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 226674.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 825554,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 163115,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4760.285714285715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13596,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6806.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3232.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1318555,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8759524,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10896384,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2308898,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 350205,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2414395,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2889000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 619699,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 15068,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15790,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8869.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 8001.333333333333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 239938,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 842435,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2709250.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 594627,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 232064,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1661336,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 722701,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 129782,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 11832,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 32521,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11334.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7607.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1147416,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 8353643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 35083251,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3495089,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1374028,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 9045550,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35015018,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3433869,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 420687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 2974190,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5642428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 524420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 565137,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2718763,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6177593.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1343893,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 821996,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5476477,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9705873,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 873312,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 74539,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 281707,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2521462,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 551591,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 232955,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 800737,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1189473,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 249686,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 755101,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4714288,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2518568,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 429813,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1545929,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21428032,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13319914,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1086397,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747586408919,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 405179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1251299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6173458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1284046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1227260,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 14921791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 12949785,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1016056,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 681187,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9067542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10304830.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 1007208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4776851,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 59397618.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 78185719,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7257641,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59272,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 161903,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 169969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 33773,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5134131,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 61946835,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 77479272,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7281465.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 119293.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 407944,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 4043484,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 848440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 778610,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5340658.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 29932567,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2850010,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1880.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3168.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3212.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1573,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 184706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 733586,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2706462,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 601452.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 62477,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 218098,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 783227,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 160821,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4773.285714285715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13716,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6830.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3264.75,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1333440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8797921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10924091,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2308026,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 350948,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2416019,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2850834,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 621053.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 14959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15560,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8856.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 7982.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 242865,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 838160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2702826,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 598512,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 231724,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1662356,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 727633,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 130655,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 11822,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 32301,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11413.166666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7589.333333333333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1137893,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 8762303,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 35133100,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3437891,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1365199,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 9560930,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35583959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3456272.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 424696,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 2986892,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5630024.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 528179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 572994,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2713103.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6216295,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1297903,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 821613.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5435478,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9680562,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 869419,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 74901,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 279414,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2516456,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 551373,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 232225,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 801252,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1189148,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 253099.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 750396,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4719419.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2511036,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 432460,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1542115,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21191283.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13244762,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1079863,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747672998778,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 409350,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1250885.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6280826,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1289704,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1241392.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 15085926.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 12937035,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1014889.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 683626,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9092820.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10349393,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 991261,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4803648,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 60367626,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 79415338,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7294704,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59331,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 161651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 170569,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 33202,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5184619,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 63513092,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 78409920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7290340.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 118892,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 408362,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 3990070,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 848233.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 802548,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5385916.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 30371628,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2716983,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1888.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3144.625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3205.875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1591,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 182260,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 716669,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2723395,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 599700,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 61335,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 217997,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 788812,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 161331,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4779,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13796,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6934.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3262.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1337237,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8847761,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 11231054.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2343405,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 355298.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2419447,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2873836,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 621515.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 14898,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15579,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8846.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 7962.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 243755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 849706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2721240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 595693,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 235229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1660601,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 709469.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 129251,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 11882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 32460,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11742,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7832.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1139356,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 9222985,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 35114269,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3447716,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1370229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 10141061,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35325731.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3414124,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 426486.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 2970055,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5609363,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 522766,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 564534,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2719017,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6265868.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1287418.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 823748.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5492404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9713829,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 867410,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 74239,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 275975,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2523413,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 550357,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 232704,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 803741,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1199409,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 250127,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 726696,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4742449,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2494346,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 435132.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1555743.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21473481.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13329263.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1083719,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747759259093,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 410637,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1257029,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6209757.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1291076,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1277480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 15005674.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13326097,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1020119,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 681796,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9088450,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10354814,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 994479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4774655,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 59490264,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 78432027,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7470437.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59822,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 162052,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 169557,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 34123,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5102932.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 63855913,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 77849721,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7277102,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 119123,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 417149.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 3981241,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 845810,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 797164.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5368493,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 29864257,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2721373,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 2166.222222222222,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":9,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3365,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3222.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1599.9,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 181068,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 727981,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2701875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 602440.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 60784,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 220532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 785808,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 161471,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 5006.428571428572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13976,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6840.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3338.75,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1324845,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8829183,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10845282,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2337290,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 351286,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2413308,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2850334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 617092,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 15218,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15930,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8963.333333333334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 8045.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 241351,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 862431,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2720790,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 603727.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 230150,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1666451,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 706389,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 130032,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 12203,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 31860,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11488,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7607.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1141692,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 8840376.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 35102892.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3579959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1374778,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 9612326,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35125097,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3418317.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 424252,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 2989070,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5890326,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 537844,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 572279,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2726951,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6199924,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1297212,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 823066,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5465642,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9743256,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 873210,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 74920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 276727,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2517369,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 552061,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 233185.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 805053,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1189921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 251079,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 752965,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4728281,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2508632,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 439760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1548404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21456399,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13252662.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1068397.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747845656332,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 412195.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1246536.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6169161,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1280694,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1228096,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 14907546,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 12825912,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1017173,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 684259,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9088234,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10320619,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 989751,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4768006,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 59525323.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 77957164.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7364540,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59020,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 162213,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 168735,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 34655,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5163688,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 61541107,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 78388434.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7530737,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 118872,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 407142,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 4005379,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 848326,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 792662,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5308800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 29912042,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2955475,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1886.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3201,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3192.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1594,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 180969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 714866,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2705687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 596165,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 60873,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 217596,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 784266,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 162393,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4726,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13255,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6686.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3254.75,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1326155,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8766403,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10848297,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2317652,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 350976,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2411021,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2857567,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 645497,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 14927,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15709,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8890,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 7981.666666666667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 248515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 847154,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2703735,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 598618,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 231744,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1656046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 719225,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 129602,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 11862,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 32380,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11454.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7667.666666666667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1145391,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 8500581,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 35124545,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3602864,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1348687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 9314576,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35448592,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3411639,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 423702.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 2974779,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5576675,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 525072,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 570918,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2719959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6157531,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1277981,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 822389,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5448487.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9671981,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 851454,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 74490,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 275475,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2519986,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 550490,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 233497,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 798519.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1192141,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 254556,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 755634,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4710954,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2622391.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 434624,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1547916,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21350866,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13291425.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1077075,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "80f8dc7306b37c22d308f26d2ea892a05a755653",
          "message": "exclude the ones that aren't part of the example set",
          "timestamp": "2025-05-13T13:55:46Z",
          "url": "https://github.com/vchuravy/trixi-performance-tracker/commit/80f8dc7306b37c22d308f26d2ea892a05a755653"
        },
        "date": 1747932138493,
        "tool": "julia",
        "benches": [
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_rhs!",
            "value": 406318,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_rhs!",
            "value": 1257397,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p7_analysis",
            "value": 6303086.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar.jl/p3_analysis",
            "value": 1327567,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1231046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 14946648,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 12954351,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1005005,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 680610,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 9084451,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 10497633,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 985991,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 4763068,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 60109924,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 78430696,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 7546120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_rhs!",
            "value": 59261,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_rhs!",
            "value": 162401,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p7_analysis",
            "value": 171991,
            "unit": "ns",
            "extra": "gctime=0\nmemory=43776\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "unstructured_2d_dgsem/elixir_euler_wall_bc.jl/p3_analysis",
            "value": 33382,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14592\nallocs=76\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_rhs!",
            "value": 5137862,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_rhs!",
            "value": 63480366,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p7_analysis",
            "value": 79307636,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_shockcapturing.jl/p3_analysis",
            "value": 7536410,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_rhs!",
            "value": 118391,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_rhs!",
            "value": 411948,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p7_analysis",
            "value": 4076037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_amr_nonperiodic.jl/p3_analysis",
            "value": 867719,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 789072,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 5408347,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 30065380,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 2717258.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_rhs!",
            "value": 1866.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_rhs!",
            "value": 3113.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p7_analysis",
            "value": 3459,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_shallowwater_well_balanced_nonperiodic.jl/p3_analysis",
            "value": 1748.2,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 181619,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 728609,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2717467,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 607393,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 60784,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 219690,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 784623.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 161451,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 4774.571428571428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 13755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 6873,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 3274.875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 1334663.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 8827223,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 11123163.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 2312264,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_rhs!",
            "value": 351856,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_rhs!",
            "value": 2422079,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p7_analysis",
            "value": 2856840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_ec.jl/p3_analysis",
            "value": 618944,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_rhs!",
            "value": 14958,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_rhs!",
            "value": 15649,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p7_analysis",
            "value": 8916.333333333334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_1d_dgsem/elixir_navierstokes_convergence_walls_amr.jl/p3_analysis",
            "value": 8091.666666666667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_rhs!",
            "value": 245658.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_rhs!",
            "value": 841089,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p7_analysis",
            "value": 2708252,
            "unit": "ns",
            "extra": "gctime=0\nmemory=404928\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_2d_dgsem/elixir_advection_extended.jl/p3_analysis",
            "value": 603826,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134976\nallocs=703\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 232324,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 1660994.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 700747,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 143167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12288\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_rhs!",
            "value": 11913,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_rhs!",
            "value": 31669,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p7_analysis",
            "value": 11458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8192\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_1d_dgsem/elixir_euler_sedov.jl/p3_analysis",
            "value": 7677.666666666667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6144\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_rhs!",
            "value": 1136089,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_rhs!",
            "value": 8331952,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p7_analysis",
            "value": 34762357,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_advection_nonperiodic_curved.jl/p3_analysis",
            "value": 3475128.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_rhs!",
            "value": 1355409,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_rhs!",
            "value": 9078174,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p7_analysis",
            "value": 35061032,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2162688\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "p4est_3d_dgsem/elixir_advection_basic.jl/p3_analysis",
            "value": 3416854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=294912\nallocs=512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_rhs!",
            "value": 426446,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_rhs!",
            "value": 3011138,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p7_analysis",
            "value": 5644857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_euler_source_terms_nonperiodic_curved.jl/p3_analysis",
            "value": 523637,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_rhs!",
            "value": 590091,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_rhs!",
            "value": 2719345,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p7_analysis",
            "value": 6181240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_euler_vortex_mortar_shockcapturing.jl/p3_analysis",
            "value": 1308947.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_rhs!",
            "value": 826378,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_rhs!",
            "value": 5496355,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p7_analysis",
            "value": 9651268.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_3d_dgsem/elixir_euler_mortar.jl/p3_analysis",
            "value": 858894,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_rhs!",
            "value": 74439,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_rhs!",
            "value": 276426,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p7_analysis",
            "value": 2538019,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_advection_nonperiodic.jl/p3_analysis",
            "value": 561508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_rhs!",
            "value": 235139,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_rhs!",
            "value": 808039,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p7_analysis",
            "value": 1193308,
            "unit": "ns",
            "extra": "gctime=0\nmemory=147456\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_2d_dgsem/elixir_euler_source_terms_nonperiodic.jl/p3_analysis",
            "value": 250607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=49152\nallocs=256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 755581,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 4726444,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 2494642,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "tree_2d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 432407,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_rhs!",
            "value": 1552979,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_rhs!",
            "value": 21418901,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p7_analysis",
            "value": 13267752.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=270336\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "structured_3d_dgsem/elixir_mhd_ec.jl/p3_analysis",
            "value": 1099943,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36864\nallocs=64\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}