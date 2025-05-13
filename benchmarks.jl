using BenchmarkTools
using Trixi

const SUITE = BenchmarkGroup()

for elixir in [
    # 1D
    joinpath(examples_dir(), "structured_1d_dgsem", "elixir_euler_sedov.jl"),
    joinpath(examples_dir(), "tree_1d_dgsem", "elixir_mhd_ec.jl"), 
    joinpath(examples_dir(), "tree_1d_dgsem", "elixir_navierstokes_convergence_walls_amr.jl"),
    joinpath(examples_dir(), "tree_1d_dgsem", "elixir_shallowwater_well_balanced_nonperiodic.jl"),
    ]
    benchname = basename(dirname(elixir)) * "/" * basename(elixir)
    SUITE[benchname] = BenchmarkGroup()
    for polydeg in [3, 7]
        trixi_include(elixir, tspan=(0.0, 1.0e-10); polydeg)
        SUITE[benchname]["p$(polydeg)_rhs!"] = @benchmarkable Trixi.rhs!(
        $(similar(sol.u[end])), $(copy(sol.u[end])), $(semi), $(first(tspan)))
        SUITE[benchname]["p$(polydeg)_analysis"] = @benchmarkable ($analysis_callback)($sol)
    end
end
